import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let dialogs = [
  {
    id: 1,
    name: "Dima",
  },
  {
    id: 2,
    name: "Sergio",
  },
  {
    id: 3,
    name: "Katrina",
  },
  {
    id: 4,
    name: "Mask",
  },
  {
    id: 5,
    name: "Victoria",
  },
];
let messages = [
  {
    id: 1,
    message: "Hi",
  },
  {
    id: 2,
    message: "Haw are you?",
  },
  {
    id: 3,
    message: "I'm fine,thank you",
  },
];
let posts = [
  {
    id: 1,
    message: "Hey,haw are you?",
    likesCount: 12,
  },
  {
    id: 2,
    message: "Hi , I'm fine",
    likesCount: 16,
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
