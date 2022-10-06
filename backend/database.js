import mysql from 'mysql2';
import dotenv from 'dotenv';
import { ContactlessOutlined } from '@material-ui/icons';
// this reads the .env file 
dotenv.config();

// this will contain all the info node needs to connect to the database.
// it will be used every time you interact with it.
const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
}).promise()

// this will just return one row of info
async function getTweet(id) {
	const [row] = await pool.query(`
	SELECT * FROM users 
	WHERE id = ?`, [id])
	return row[0]
}

// this adds a tweet to the database, needs to be adjusted to what the tweet model actually contains
async function createTweet( name, email ) {
	const [result] = await pool.query(`
	INSERT INTO users (name, email) 
	VALUES ( ?, ?)`, [name, email])
}

// get the tweet
const idunno = getTweet(6);
// idunno returns a promise so you call the then method
idunno.then(response => {console.log(response)});



