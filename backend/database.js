import mysql from 'mysql2';
import dotenv from 'dotenv';
import { ContactlessOutlined } from '@material-ui/icons';
// this reads the .env file 
dotenv.config();

// this will contain all the info node needs to connect to the database.
// it will be used every time you interact with it.
// ************ using this means you need to have a .env file with this info in the dir.
const pool = mysql.createPool({
	host: process.env.MYSQL_HOST,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE
}).promise()

/*********************ADD DATABASE FUNCTIONS HERE **********************************************/

// this will just return one row of info
export async function getTweet(id) {
	const [row] = await pool.query(`
	SELECT * FROM tweets 
	WHERE tweetID = ?`, [id])
	return row[0]
}

// this adds a tweet to the database, needs to be adjusted to what the tweet model actually contains
export async function createTweet( content ) {
	const [result] = await pool.query(`
	INSERT INTO tweets(content)
	VALUES(?)`, content);

	// so that will insert the tweet and sends back an array with some info
	// we are gonna take one of those and use it to get the whole tweet back.
	const resRet = getTweet(result.insertId);
	return resRet;
}

/*
 **************************************** END DATABASE FUNCTIONS **********************************/

