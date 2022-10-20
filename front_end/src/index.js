import React from "react";
import { createRoot } from 'react-dom/client';
import TweetTextComponent from "./components/tweetTester";

// couple variables to make stuff shorter at the end. also this is the react 18 way to do this
const container = document.getElementById('root');
const root = createRoot( container );

// this is where you add components to be rendered/ how to render them.
root.render(<TweetTextComponent />);