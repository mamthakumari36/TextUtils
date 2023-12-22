import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
//import {
  //BrowserRouter as Router,
  //Routes,
  //Route
//} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "black"
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (   // this is called JSX
    <>
     {/* <Router>*/}
        <Navbar title="TextUtils" aboutTxt="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">

          {/*<Routes>
            <Route exact path="/about" element={ <About/>}/>

            <Route exact path="/" element={ <TextForm heading="Enter the text to analyze" showalert={showAlert} mode={mode} />}/>
             
          </Routes>*/}
          <TextForm heading="Enter the text to analyze" showalert={showAlert} mode={mode} />
        </div>
     {/* </Router>*/}
    </>
  );
}

export default App;
