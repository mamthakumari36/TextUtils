//import React, { useState } from 'react'
import React from 'react'

export default function About(props) {

    /*  const [mystyle, setmystyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid white'
    });

  const [btnText, setBtnText] = useState('Turn on dark mode');

    const togglestyle = () => {
        if (mystyle.color === 'black') {
            setmystyle({
                color: 'white',
                backgroundColor: 'black',
                border: '2px solid black'
            })
            setBtnText('Turn on light mode');
        }
        else {
            setmystyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setBtnText('Turn on dark mode');
        }
       
    }*/

    return (
        <div className={`container my-4  style={mystyle} ${props.mode === 'light' ? 'dark' : 'light'}`}>
            <div className="accordion  " id="accordionExample">
                <h1 style={{ color: props.mode === 'dark' ? '#d60c7a' : 'black' }}>About Us</h1>
                <div className="accordion-item" style={{
                    backgroundColor: props.mode === 'light' ? 'white' : '#1c1818', color: props.mode === 'light' ?
                        'black' : 'white'
                }}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#1c1818', color: props.mode === 'light' ?'black' : 'white'
                        }} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> What is Textutils ?</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong><code>TextUtils</code></strong>  is simply a set of utility functions to do operations on String objects. We provide free
                            tools to help you with your daily tasks. You will find tools for formatting source code, converters, tools for handling text, such as convert characters to uppercase or lowercase, clear text and many others.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#1c1818', color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#1c1818', color: props.mode === 'light' ? 'black' : 'white' }}
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>  Which technologies are used ?</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Languages used to create Textutils app are <code>HTML, CSS, Bootstrap, JavaScript and React.js</code>
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#1c1818', color: props.mode === 'light' ? 'black' : 'white' }}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#1c1818', color: props.mode === 'light' ? 'black' : 'white' }}
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong> What does it do ?</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            TextUtils is a simple and user-friendly text manipulation tool built with React. It allows you to easily convert text to uppercase, lowercase, and remove spaces.
                        </div>
                    </div>
                </div>
            </div>
            {/*<button onClick={togglestyle} type="button" className="btn btn-primary my-2">{btnText}</button>*/}
        </div>
    )
}



