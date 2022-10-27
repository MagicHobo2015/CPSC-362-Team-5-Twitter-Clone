import React from "react";

export function TweetOut(props) {
    return(
        <div className="tweetBox">
            <p3 className="tweetName">
                {props.name}
            </p3>
            <br/>
            <p className="tweetText">
                {props.text}
            </p>
            <p2 className="tweetTime">
                {props.time}
            </p2>
        </div>
    );
}

