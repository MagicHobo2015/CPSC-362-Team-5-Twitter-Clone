import mysql from 'mysql2';
import dotenv from 'dotenv';
// this reads the .env file 
dotenv.config();

const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
}).promise()

const results = await pool.query("SELECT * FROM users");
console.log(results[0]);