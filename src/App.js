import React from 'react'
import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App(){

    return(
        <>
            <Navbar title='TextUtils' about="About TextUtils"/>
            <br />
            <div className='container'>
                <TextForm heading="Enter Text to be manipulated"/>
            </div>
            {/* <About/> */}
        </>
    )
}

export default App;