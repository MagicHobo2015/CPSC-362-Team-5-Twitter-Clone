import React from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://127.0.0.1:8080/'
class TweetInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {aName: '', tweet: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        axios({
            method: 'post' ,
            url: '/createTweet',
            data:{
                "content": this.state.tweet
            }
        });
        alert(this.state.aName + ' tweeted ' + this.state.tweet);
        event.preventDefault();
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Name:
                <input name="aName" type="text" value={this.state.aName} onChange={this.handleChange} />
            </label>
            <br />
            <label>
                Tweet:
                <textarea name="tweet" value={this.state.tweet} onChange={this.handleChange} />
            </label>
            <br />
            <input type="submit" value="Tweet" />
        </form>
        );
    }
}

export default TweetInput;