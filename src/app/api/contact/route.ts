import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { sendMail } from '@/lib/mailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { formType, ...data } = body;

    let dbResult;
    let emailSubject = '';
    let emailHtml = '';

    if (formType === 'appointment') {
      const { firstName, lastName, mobile, email, service } = data;
      // Save to DB
      [dbResult] = await pool.execute(
        'INSERT INTO appointments (first_name, last_name, mobile, email, service) VALUES (?, ?, ?, ?, ?)',
        [firstName, lastName, mobile, email, service]
      );

      emailSubject = 'New Appointment Request - Dr. Venus';
      emailHtml = `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2c5234;">New Appointment Request</h2>
          <p>You have received a new appointment booking request from your website.</p>
          <hr />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Service:</strong> ${service}</p>
          <hr />
          <p style="font-size: 12px; color: #777;">This is an automated email sent from Dr. Venus website.</p>
        </div>
      `;
    }
    else if (formType === 'enquiry') {
      const { name, mobile, email, lookingFor, problem } = data;
      const services = Array.isArray(lookingFor) ? lookingFor.join(', ') : lookingFor;

      // Save to DB
      [dbResult] = await pool.execute(
        'INSERT INTO enquiries (name, mobile, email, services, problem) VALUES (?, ?, ?, ?, ?)',
        [name, mobile, email, services, problem]
      );

      emailSubject = 'New Enquiry Received - Dr. Venus';
      emailHtml = `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2c5234;">New Enquiry Details</h2>
          <p>A user has sent an enquiry through the contact form.</p>
          <hr />
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Looking For:</strong> ${services}</p>
          <p><strong>Problem:</strong> ${problem}</p>
          <hr />
          <p style="font-size: 12px; color: #777;">This is an automated email sent from Dr. Venus website.</p>
        </div>
      `;
    }
    else if (formType === 'training') {
      const { firstName, lastName, mobile, email, qualification, experience, course, message } = data;

      // Save to DB
      [dbResult] = await pool.execute(
        'INSERT INTO training_requests (first_name, last_name, mobile, email, qualification, experience, course, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [firstName, lastName, mobile, email, qualification, experience, course, message]
      );

      emailSubject = 'New Training Program Inquiry - Dr. Venus';
      emailHtml = `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #2c5234;">Professional Training Inquiry</h2>
          <p>You have received a new inquiry regarding the training programs.</p>
          <hr />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Qualification:</strong> ${qualification}</p>
          <p><strong>Experience:</strong> ${experience} years</p>
          <p><strong>Course:</strong> ${course}</p>
          <p><strong>Message:</strong> ${message || 'No additional message'}</p>
          <hr />
          <p style="font-size: 12px; color: #777;">This is an automated email sent from Dr. Venus website.</p>
        </div>
      `;
    } else {
      return NextResponse.json({ error: 'Invalid form type' }, { status: 400 });
    }

    // Send Mail
    await sendMail({
      to: process.env.ADMIN_EMAIL || 'info@drvenus.in', // Admin email
      subject: emailSubject,
      html: emailHtml,
    });

    return NextResponse.json({ success: true, message: 'Form submitted successfully' });
  } catch (error: any) {
    console.error('API Error:', error);

    let errorMessage = 'Internal Server Error';
    let step = 'unknown';

    if (error.code?.startsWith('ER_')) {
      errorMessage = `Database Error: ${error.message}`;
      step = 'database';
    } else if (error.code === 'ECONNREFUSED') {
      errorMessage = 'Database Connection Refused. Is MySQL running?';
      step = 'database-connection';
    } else if (error.hostname?.content?.includes('smtp') || error.command === 'CONN') {
      errorMessage = `Email Error: ${error.message}`;
      step = 'mailer';
    }

    return NextResponse.json({
      error: errorMessage,
      details: error.message,
      code: error.code,
      step
    }, { status: 500 });
  }
}
