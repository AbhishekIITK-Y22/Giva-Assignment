require('dotenv').config();
const { Client } = require('pg');
const dummyData = require('./dummyData');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});


async function insertData() {
    try {
        await client.connect();
        console.log("Connected to PostgreSQL");

        // Delete all previous data
        await client.query('DELETE FROM products');
        console.log("All previous data deleted");

        // Insert new data
        for (const item of dummyData) {
            const query = `
                INSERT INTO products (id, name, description, price, available_quantity)
                VALUES ($1, $2, $3, $4, $5)
                ON CONFLICT (id) DO NOTHING;
            `;
            const values = [item.id, item.name, item.description, item.price, item.available_quantity];
            await client.query(query, values);
        }

        console.log("Data inserted successfully");
    } catch (error) {
        console.error("Error inserting data", error);
    } finally {
        await client.end();
        console.log("Connection closed");
    }
}

insertData();
