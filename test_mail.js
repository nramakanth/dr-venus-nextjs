const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');

async function test() {
  const envPath = path.join(__dirname, '.env.local');
  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim();
  });

  console.log('--- Testing Email Setup ---');
  console.log('Host:', env.SMTP_HOST);
  console.log('User:', env.SMTP_USER);

  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(env.SMTP_PORT || '587'),
    secure: env.SMTP_SECURE === 'true',
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  });

  try {
    await transporter.verify();
    console.log('Success: Email configuration is valid!');
  } catch (error) {
    console.error('Error: Email verification failed:', error.message);
    if (env.SMTP_USER.length === 14 && env.SMTP_HOST.includes('gmail')) {
        console.log('Tip: Your SMTP_USER looks like a Mailtrap ID, but you are using Gmail host.');
        console.log('Try setting SMTP_HOST=sandbox.smtp.mailtrap.io');
    }
  }
  process.exit();
}

test();
