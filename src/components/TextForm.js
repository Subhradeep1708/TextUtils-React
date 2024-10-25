import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  // text = "New Text"; // Wrong way to change the text
  // setText("New Text"); //Right way to change the text

  const handleUpClick = () => {
    // console.log("Button clicked");
    setText(text.toUpperCase());
    props.showAlert("Converted to Uppercase ", "success")

  };

  const handleLoClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Converted to Lowercase", "success")
  };

  const handleClearClick = () => {
    setText(" ");
    props.showAlert("Text Cleared", "success")
  };

  const handleOnChange = (event) => {
    // console.log("handleOnChange " + text);
    setText(event.target.value);
    // props.showAlert("Typing","success")
  };

  return (
    <>
      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white', color: props.mode2 === 'light' ? 'black' : 'white' }}>
        <h3 style={{ color: props.mode === 'light' ? 'black' : 'white' }}> {props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="9"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColor: props.mode === 'dark' ? 'aliceblue' : 'white' }}

          ></textarea>
          <button className="btn btn-primary my-3 btn-outline-" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn  my-3 mx-3 btn-primary btn-outline-" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary my-3 mx-1 btn-outline-" onClick={handleClearClick}>
            Clear
          </button>
        </div>
      </div>

      <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
        <h2>Your Text Summary</h2>
        <p>
          Your text has {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length}
          characters
        </p>
        <p>
          Reading Time Required : {text.split(" ").length * 0.008} Minutes or{" "}
          {text.split(" ").length * 0.008 * 60} Seconds
        </p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter Something Above to preview it here"}</p>
      </div>
    </>
  );
}
