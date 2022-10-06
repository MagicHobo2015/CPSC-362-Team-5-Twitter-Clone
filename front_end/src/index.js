import React from "react";
import { createRoot } from 'react-dom/client';

// this isnt working right now..
import "./index.css";

// couple variables to make stuff shorter at the end. also this is the react 18 way to do this
const container = document.getElementById('root')
const root = createRoot( container )

function Tweet() {
	return (
    <div classname="Tweet">
      <Avatar />
      <div className="content">
      <NameWithHandle /><Time />
      <Message />
      {/*/ ******************buttons for the tweet go here*************************************/}
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      src='https://gravatar.com/avatar/nothing'
      alt='avatar'
      className='avatar'
    />
  );
}

function Message() {
  return (
    <div className="message">This message is less than 140 characters! I like pizza</div>
  );
}

function NameWithHandle() {
  return (
    <span className="name-with-handle">
      <span className="name">MagicHobo</span>
      <span className="handle">@MagicHobo</span>
    </span>
  );
}

const Time = () => <span className="time">3h ago</span>;

root.render(<Tweet />);