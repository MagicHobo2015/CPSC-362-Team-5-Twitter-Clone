
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { TweetOut } from "./tweetDisplay";
import "./tweetDisplay.css";



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.Fragment>
  <TweetOut name = "Tony" text = "I like Pizza" time = "10/23/2022"/>
  <TweetOut name = "Ben" text = "Cookies" time = "10/26/2022"/>
  <TweetOut name = "Josh" text = "RIPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP" time = "10/24/2022"/>
  </React.Fragment>);


