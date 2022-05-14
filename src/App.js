import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App(){
    const [mode, setMode] = useState('light')
    const [alert, setAlert] = useState(null)

    const showAlert= function (message,type)
    {
        setAlert({
            msg: message,
            type: type
        })
        
        setTimeout(()=>{
            setAlert(null)
        },1500)
    }
     const changeMode = ()=>{
         if(mode==='light')
         {
            setMode('dark')
            document.body.style.backgroundColor="rgb(16, 38, 74)";
            document.body.style.color="white";
            document.title='TextUtils - dark mode'
            showAlert("Dark mode is enabled", "success")
         }
         else
         {
            setMode('light')
            document.body.style.backgroundColor="white";
            document.body.style.color="black";
            document.title='TextUtils - light mode'
            showAlert("Dark mode is disabled", "success")
         }
     }

    return(
        <>
        <Router>
            <Navbar title='TextUtils' about="About TextUtils" mode={mode} changeMode={changeMode}/>
            <Alert alert={alert} mode={mode}/>
            <br />
            <Routes>
                <Route exact path="/" element={<div className='container'>
                        <TextForm heading="Enter Text to be manipulated" showAlert={showAlert} mode={mode}/>
                    </div>} />
                <Route exact path="/about" element={<About mode={mode}/>} />
            </Routes>
        </Router>
        </>
    )
}

export default App;