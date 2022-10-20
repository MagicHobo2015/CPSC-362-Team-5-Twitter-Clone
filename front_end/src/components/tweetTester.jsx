// these are for axios
import React from "react";
import axios from "axios";
// end axios
import { Component } from "react";
import getTweet from "./axiosRoutes";

class TweetTextComponent extends Component {


	constructor() {
		super();
		this.state = {
			name: "React",
			tweet: []
		};
	}

	getTweet(thing) {
		axios.get('http://127.0.0.1:8080/tweet/1').then(res => {
			const tweet = res.data;
			this.setState({tweet})
			console.log(tweet);
		})
	}

	handleChange(event) {
		console.log(event.target.value)
	}

	render() {
		return (
			<div>
				<label>Enter Value: </label>
				<input type="testarea"
				name="textValue"
				onChange={ this.handleChange } />
				<button onClick={() => this.getTweet()}>ClickMe</button>
			</div>
		)
	}


}

export default TweetTextComponent;