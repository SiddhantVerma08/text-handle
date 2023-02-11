import React, { useState } from "react";

export default function TextForm(props) {

    const handleUpClick = () => {
      let newText = count.toUpperCase();
      setCount(newText)
        }
    const handleOnChange = (event) => {
      console.log("onchange");
      setCount(event.target.value)
    }
  const [count, setCount] = useState("Enter text here!");
  return (
    <div className="mb-3 mt-3">
      <h1>{props.heading}</h1>
      <textarea className="form-control" value={count} onChange={handleOnChange} id="textbox" rows="3"></textarea>
      <button type="button" onClick={handleUpClick} className="btn btn-primary mt-3">
        Convert to UPPERCASE
      </button>
    </div>
  );
}
