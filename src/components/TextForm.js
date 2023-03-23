import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
      let newText = count.toUpperCase();
      setCount(newText)
        }
    const handleLoClick = () => {
      let newText = count.toLowerCase();
      setCount(newText)
        }
    const handleOnChange = (event) => {
      console.log("onchange");
      setCount(event.target.value)
    }
    const handleClearText = (event) => {
      let newText = "";
      setCount(newText)
    }
    const handleCopy = () => {
      let text = document.getElementById("textbox");
      text.select();
      navigator.clipboard.writeText(text.value)
    }
  const [count, setCount] = useState("Enter text here!");
  return (
    <>
    <div className="container mb-3 mt-3" style={{color: props.mode==="dark"?"white":"#146b78"}} >
      <h2>{props.heading}</h2>
      <textarea className="form-control" style={{backgroundColor: props.mode==="dark"?"grey":"white", color: props.mode==="dark"?"white":"#146b78"}} value={count} onChange={handleOnChange} id="textbox" rows="3"></textarea>
      <button type="button" onClick={handleUpClick} className="btn btn-primary mt-3 mx-1">
        Convert to UPPERCASE
      </button>
      <button type="button" onClick={handleLoClick} className="btn btn-primary mt-3 mx-1">
        Convert to lowercase
      </button>
      <button type="button" onClick={handleClearText} className="btn btn-primary mt-3 mx-1">
        Clear Text
      </button>
      <button type="button" onClick={handleCopy} className="btn btn-primary mt-3 mx-1">
        Copy Text
      </button>

    </div>
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"#146b78"}}>
      <h2>Your text summary</h2>
      <p>{count.split(" ").length} Words and {count.length} characters</p>
      <p>{0.008 * count.split(" ").length} Min Read</p>
      <h2>Your Preview</h2>
      <p>{count.length>0?count:"Enter text to preview here"}</p>
    </div>
    </>
  );
}
