import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpclick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();

    setText(newText);
    props.showAlert("coverted to uppercase","success");
  };
  
  const handleclearclick = () => {
    let newText = "";
    
    setText(newText);
    props.showAlert("clear Text","success");
  };
  const handleLwclick = () => {
    console.log("handleLwClick was clicked" + text);
    let newText = text.toLowerCase();
    
    setText(newText);
    props.showAlert("coverted to lowercase","success");
  };
  const handlecopy = () => {
    const text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("text copied","success");
  };
  const handleExtraSpace = () => {
    const newtext = text.split(/[ ]+/);
    props.showAlert("Extra Spaces are removed","success");
    setText(newtext.join(" "));
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };

  return (
    <>
      <div
        className="container my-3  "
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1>{props.title}</h1>

        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <div className="container d-flex ">
          <button className="btn my-3 btn-primary mx-1" onClick={handleUpclick}>
            Convert To uppercase
          </button>
          <button className="btn my-3 btn-primary mx-1" onClick={handleLwclick}>
            Convert To lowercase
          </button>
          <button
            className="btn my-3 btn-primary mx-1"
            onClick={handleclearclick}
          >
            Clear Text
          </button>
          <button className="btn my-3 btn-primary mx-1" onClick={handlecopy}>
            Copy Text
          </button>
          <button
            className="btn my-3 btn-primary mx-1"
            onClick={handleExtraSpace}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h1 className="text-2xl">Your Text Summary</h1>
        <p className="">
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p className="">{0.008 * text.split(" ").length} minutes </p>
        <h2>Preview</h2>
        <p>{text.length>0 ?text:'Enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  );
}
