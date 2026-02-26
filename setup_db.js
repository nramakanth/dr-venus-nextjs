const mysql = require('mysql2/promise');
const fs = require('fs');
const path = require('path');

async function setup() {
  // Read .env.local manually
  const envPath = path.join(__dirname, '.env.local');
  const envContent = fs.readFileSync(envPath, 'utf8');
  const env = {};
  envContent.split('\n').forEach(line => {
    const [key, value] = line.split('=');
    if (key && value) env[key.trim()] = value.trim();
  });

  console.log('--- Initializing Database Setup ---');
  
  try {
    // Connect without database first to create it
    const connection = await mysql.createConnection({
      host: env.MYSQL_HOST || 'localhost',
      user: env.MYSQL_USER || 'root',
      password: env.MYSQL_PASSWORD || '',
    });

    console.log('Connected to MySQL server.');

    const dbName = env.MYSQL_DATABASE || 'dr_venus_db';
    await connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
    console.log(`Database "${dbName}" created or already exists.`);

    await connection.query(`USE ${dbName}`);

    // Create Tables
    const queries = [
      `CREATE TABLE IF NOT EXISTS appointments (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        mobile VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        service VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`,
      `CREATE TABLE IF NOT EXISTS enquiries (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        services TEXT NOT NULL,
        problem TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`,
      `CREATE TABLE IF NOT EXISTS training_requests (
        id INT AUTO_INCREMENT PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        mobile VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        qualification TEXT NOT NULL,
        experience VARCHAR(50) NOT NULL,
        course VARCHAR(255) NOT NULL,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )`
    ];

    for (const query of queries) {
      await connection.query(query);
    }
    console.log('All tables created successfully.');

    await connection.end();
    console.log('Setup completed.');

  } catch (error) {
    console.error('Setup failed:', error.message);
  }
}

setup();
