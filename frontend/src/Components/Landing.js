import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [wordCount, setWordCount] = useState(0);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    window.location.href = "/list";
  };
  const handleOnChange = (event) => {
    setWordCount(2);
    let text = event.target.value;
    setText(text);
    setWordCount(text.length);
    let element = document.getElementById("wordCounts");
    if (element) {
      element.style.display = "block";
    }
  };

  return (
    <>
      <div
        className="flexJustifyCenter"
        style={{
          //   border: "1px solid black",
          height: "90vh",
          marginTop: "3vh",
          flexDirection: "column",
        }}
      >
        <div
          className="flexJustifyCenter"
          id="innerContainer"
          style={{ flexDirection: "column" }}
        >
          <h1>WELCOME TO</h1>
          <h2>A LiST OF PRODUCTS i LiKE</h2>
          <textarea
            name="userName"
            value={text}
            onChange={handleOnChange}
            rows="1"
            placeholder="search user by username"
            autoFocus
            maxLength={"25"}
            style={{ textAlign: "center", width: "16vw" }}
          ></textarea>
          <span
            id="wordCounts"
            style={{ display: "none", textAlign: "center" }}
          >
            {wordCount}
          </span>
        </div>
        <div
          className="flexJustifyCenter"
          id="searchContainer"
          style={{ flexDirection: "column", marginTop: "8vh" }}
        >
          <span>Join & enter your own list of products that you like</span>
          <button>JOIN</button>
        </div>
      </div>
      <h6 style={{ textAlign: "center" }}>Made with MERN stack and python</h6>
    </>
  );
}
