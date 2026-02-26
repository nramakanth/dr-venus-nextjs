import 'dotenv/config';
import pool from './src/lib/db';

async function check() {
    try {
        console.log('--- Database Connection Check ---');
        const [rows] = await pool.execute('SELECT 1 + 1 AS result');
        console.log('Connection successful!');

        console.log('\n--- Database Existence Check ---');
        const [dbRows]: any = await pool.execute(`SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '${process.env.MYSQL_DATABASE || 'dr_venus_db'}'`);
        if (dbRows.length > 0) {
            console.log(`Database "${process.env.MYSQL_DATABASE || 'dr_venus_db'}" exists.`);
        } else {
            console.log(`ERROR: Database "${process.env.MYSQL_DATABASE || 'dr_venus_db'}" DOES NOT EXIST.`);
        }

        console.log('\n--- Tables Check ---');
        const tables = ['appointments', 'enquiries', 'training_requests'];
        for (const table of tables) {
            try {
                await pool.execute(`SELECT 1 FROM ${table} LIMIT 1`);
                console.log(`Table "${table}" exists.`);
            } catch (err: any) {
                console.log(`ERROR: Table "${table}" DOES NOT EXIST. (${err.message})`);
            }
        }

    } catch (error: any) {
        console.error('CRITICAL ERROR:', error.message);
        if (error.code === 'ECONNREFUSED') {
            console.log('Tip: Check if MySQL is running and the host/port is correct.');
        } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
            console.log('Tip: Check your MYSQL_USER and MYSQL_PASSWORD in .env.local.');
        } else if (error.code === 'ER_BAD_DB_ERROR') {
            console.log('Tip: The database specified in MYSQL_DATABASE does not exist. You need to create it.');
        }
    } finally {
        process.exit();
    }
}

check();
