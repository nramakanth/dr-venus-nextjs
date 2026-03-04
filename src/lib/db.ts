import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    // Use IPv4 loopback by default to avoid Windows localhost/IPv6 connection issues.
    host: process.env.MYSQL_HOST || '127.0.0.1',
    port: Number(process.env.MYSQL_PORT || 3306),
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DATABASE || 'dr_venus_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

export default pool;
