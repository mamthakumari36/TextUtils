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

    const copytext=()=>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showalert("Copied to clipboard","success")
    }

    const [text, setText] = useState('');
    //text = " text here" // wrong way to change state
    //setText("text here") // correct way to change state
    return (
        <>
        <div className='container' style= {{color : props.mode === 'dark' ? '#d60c7a' : 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control"  value={text} placeholder='Enter text to enable the buttons...' onChange={handlechange} style={{backgroundColor: props.mode === 'light' ? 'white' : '#1c1818' , color:props.mode === 'light' ? 'black' : 'white'}} id="myBox" rows="10"></textarea>
            </div>
            
            <button disabled={text.length===0} className='btn mx-2 my-2' onClick={uppercase}><strong>Convert to Uppercase</strong> </button>
            <button disabled={text.length===0} className='btn mx-2 my-2' onClick={lowercase}><strong>Convert to Lowercase</strong></button>
            <button disabled={text.length===0} className='btn mx-2 my-2' onClick={removespace}><strong>Remove space</strong></button>
            <button disabled={text.length===0} className='btn mx-2 my-2' onClick={copytext}><strong>Copy text</strong></button>
            <button disabled={text.length===0} className='btn mx-2 my-2' onClick={cleartext}><strong>Clear Text</strong></button>
            
        </div>
        <div className="container my-4" style={{color : props.mode === 'dark' ? '#d60c7a' : 'black'}}>
            <h1>Your text summary</h1>
            <b><p>{text.split(/\s+/).filter((ele) => {return ele.length !== 0}).length} Words and {text.length} Characters</p>
            <p>{ 0.008 * text.split(' ').filter((ele) => {return ele.length !== 0}).length} Minutes read</p>
            </b>

            <h2>Preview</h2>
            <p>{text.length > 0 ? text : 'Enter your text in the above textarea'}</p>
        </div>

        </>
    )
}



