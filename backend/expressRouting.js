// need to import it to use it
import express from 'express';
import cors from 'cors';

// ************************************************* import stuff you made here
import { createTweet, getTweet } from './database.js';

// ************ END IMPORTS **********************************************

// create the express app
const app = express();
// const cors = require('cors');
app.use(cors({
	origin: '*'
}));
// so we can accept json stuff
app.use(express.json());
// were gonna keep the port here so its easy to change
const portNumber = 8080;


// this is straight from the documentation for express
app.use((err, req, res, next) => {
	console.err(err.stack)
	res.status(500).send('Something is broke yo!');
});

app.listen(portNumber, () => {
	console.log("Server is running on port 8080");
});

/*********************************THE ROUTE FUNCTIONS GO HERE ***********************************/
// this will get a single tweet by id.. i dont know what we are gonna use to find them but this works for now
app.get("/tweet/:id", async (req, res) => {
	const id = req.params.id;
	const tweet = await getTweet(id);
	res.send(tweet);
})

// this will create a tweet, well kinda i need the actual model to complete this correctly
app.post("/createTweet", async (req, res) => {
	const content = req.body.content
	const tweet = await createTweet( content );
	res.status(201).send(tweet);
})

/********************************** END ROUTE FUNCTIONS ******************************************/
