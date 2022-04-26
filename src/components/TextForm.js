import React, {useState} from 'react'   //importing useState hook from react
//hooks helps to use class features without creating a class.....do a search for better definition

export default function TextForm(props) {
    const [text, setText] = useState('');        //remember this hooks syntax/line---here 'text' is a state variable & 'setText' is a function  & userState is a react hook. there are different hooks in react
    //text = "new text for this variable";      //wrong way to change the state
    //setText("new text for this variable");      //Correct way to change the state

    //convert to uppercase
    const handleUpClick = () => {
        // console.log("Upper case was clicked: " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    // onchange for textarea to set our text equal to value
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }
    //converting text to lower case
    const handleDownClick = () => {
        // console.log("Upper case was clicked: " + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case", "success");
    }

    //to empty textarea
    const handleClearClick = () => {
        // console.log("Upper case was clicked: " + text);
        let newText = '';
        setText(newText);
    }

    //to make every first letter of word uppercase/titlecase
    const capitalFirstLetter= () =>{
        let newText = text.split(" ").map((currentValue)=>{
            let newText = currentValue[0].toUpperCase() + currentValue.slice(1);
            return newText;
        });
        setText(newText.join(" "));
    }

    //to enable dark mode 
    const handleDarkTheme = () => {
        document.querySelector('body').style.backgroundColor = "black";
        document.querySelector('body').style.color = "white";
    }
    // to enable light mode
    const handleLightTheme = () => {
        document.querySelector('body').style.backgroundColor = "white";
        document.querySelector('body').style.color = "black";
    }
    //to copy text
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard", "success");
    }
    //to handle extraspaces
    const handleExtraSpaces = () => {
        let newTexts = text.split(/[ ]+/);
        setText(newTexts.join(" "))
        // let Trim = text.length>0 ? text.trim().split(" ").length : 0;
        props.showAlert("Removed extra spaces", "success");
    }

    return (
        <>
        <div className="container my-4">
            <h1 className="text-center">{props.heading}</h1>
            <div className="my-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#343a40':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-2 my-2" onClick={capitalFirstLetter}>Capital First Letter</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleDarkTheme}>Dark Mode</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLightTheme}>Light Mode</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container mt-4">
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words & {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the Textbox above to preview it here :)"}</p>  {/*using turnary operators here to display placeholder: if the length of text is greater than 0 than display text else show this string"Enter...." */}
        </div>
        </>
    )
}
// one curly brace {} means we are writing javascript code in html & {{}} two curly brace means we are writing object in javascript

//change language mode from the bottom right {} Javascript or {} Javascript React