import React, { useState } from 'react'

export default function TextForm(props) {
    
    const uppercase = () => {
       // console.log("button was clicked" + text)
       let newText = text.toUpperCase();
        setText(newText)
        props.showalert("Converted to uppercase","success")
    }
    const lowercase = () => {
        let newText = text.toLowerCase();
         setText(newText)
         props.showalert("Converted to lowercase","success")
     }
     
     const cleartext = () => {
        let newText = '';
        setText(newText)
        props.showalert("Text cleared","success")
    }
    const removespace = () => {
        let newText =text.split(/[ ]+/).join('');
        setText(newText)
        props.showalert("spaces removed","success")
    }
    const handlechange = (event) => {
       // console.log("on change")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    //text = " text here" // wrong way to change state
    //setText("text here") // correct way to change state
    return (
        <>
        <div className='container' style= {{color : props.mode === 'dark' ? '#d60c7a' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" value={text} onChange={handlechange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#1c1818' , color:props.mode === 'light' ? 'black' : 'white'}} id="exampleFormControlTextarea1" rows="10"></textarea>
            </div>
            
            <button className='btn mx-2 my-2' onClick={uppercase}>Convert to Uppercase</button>
            <button className='btn mx-2 my-2' onClick={lowercase}>Convert to Lowercase</button>
            <button className='btn mx-2 my-2' onClick={cleartext}>Clear Text</button>
            <button className='btn mx-2 my-2' onClick={removespace}>Remove space</button>
            
        </div>
        <div className="container my-4" style={{color : props.mode === 'dark' ? '#d60c7a' : 'black'}}>
            <h1>Your text summary</h1>
            <b><p>{text.split(' ').length-1} Words and {text.length} Characters</p>
            <p>{ 0.008 * text.split(' ').length} Minutes read</p>
            </b>

            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter your text in the above textarea'}</p>
        </div>

        </>
    )
}



