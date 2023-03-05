import React from "react";
import "./Exercise4.css";

const style_header = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

function Red() {
  return (
    <div style={{ textAlign: "Center" }}>
      <h1 style={style_header}>This is a header</h1>
      <p className="para">This is a paragraph.</p>
      <a href="#">This is a link.</a>
      <h4>This is a form</h4>
      <form>
        <label>
          Enter your name: <br />
          <br />
          <input type="text" name="name" />
          <button type="submit">Submit</button>
        </label>
      </form>
      <br />
      <h4>Here is an image:</h4>
      <img
        src="https://pbs.twimg.com/card_img/1628109266325209101/8QiilBjE?format=png&name=medium"
        height="100px"
        alt="placeholder"
      />
      <h4>This is a list:</h4>
      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  );
}

export default Red;
