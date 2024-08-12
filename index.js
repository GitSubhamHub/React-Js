import User from "./App"
import ReactDOM from "react-dom"
ReactDOM.render(
  <>
   <User name="Shubham" age="22" city="Noida" />
   <hr/>
   <User name="Awasthi" age="22" city="UP" />
   <hr/>
   <User name="Umesh" age="24" city="Delhi" />
   <hr/>
  </>
  ,document.getElementById("root"))



/*
import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App  from './App';                //if we're not exporting app component as default then, we've to use {} while importing.  
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/