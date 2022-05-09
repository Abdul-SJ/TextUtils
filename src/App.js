// import logo from './logo.svg';
// import './App.css';     //we don't need external css as we are using bootstrap which is linked in public>index.html file

import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   // Link
// } from "react-router-dom";

//remember to close every tag in html like here <hr/> & <input/>
//also replace 'class' with 'className'
//importing navbar from Navbar.js file by just typing '<Navbar/>' and the 'title' in it is a react prop/property. Basically we are creating a react app with navbar saved in different file and we can also rename that navbar title here
function App() {
  const [mode, setMode] = useState('light'); //creating state for whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {     //creating showAlert function to show our alert message
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {        //to hide alert automatically after 1.2 sec
      setAlert(null)
    }, 1200);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#182a3c';     //background color
      document.body.style.color = '#fff';    //text color 
      showAlert("Dark Mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils is amazing';
      }, 3000);
      setInterval(() => {
        document.title = 'Install TextUtils now!';
      }, 1500);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#000';
      showAlert("Light Mode has been enabled", "success");
      // document.title = 'TextUtils - Light Mode';
    }
  }
  return (
    <>
      {/* <Router>    *using router to redirect to other page/menu without reloading the page */}
        <Navbar title="TextUtils" aboutText="About" searchBtn="ourBtn" mode={mode} toggleMode={toggleMode} enableText="Enable Dark mode" />
        <Alert alerts={alert} />
        <div>
          {/* <Routes> */}
            {/* <Route path="/" element={<TextForm heading="Try TextUtils to Analyze the text" mode={mode} showAlert={showAlert} />}></Route> */}
            <TextForm heading="Enter the Text to Analyze below" mode={mode} showAlert={showAlert} />
            {/* <Route path="/about" element={<About mode={mode} />}></Route> */}
          {/* </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
