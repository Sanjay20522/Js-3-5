import React from 'react'
import { useState, useRef } from "react";

const FormRef = () => {

  const titles = ["React", "Angular", "Vue"];
  const [index, setIndex] = useState(0);

  const [name, setName] = useState("");

  const textRef = useRef();

  const changeTitle = () => {
    setIndex((index + 1) % titles.length);
  };

  const toggleText = () => {
    if (textRef.current.style.display === "none") {
      textRef.current.style.display = "block";
    } else {
      textRef.current.style.display = "none";
    }
  };

  return (
    <>
      <h1>{titles[index]}</h1>
      <button onClick={changeTitle}>Change Title</button>

      <hr />

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h2>Your Name: {name}</h2>

      <hr />
      
      <p ref={textRef}>This text can be hidden or shown</p>
      <button onClick={toggleText}>Hide / Show Text</button>
    </>
  );
}

export default FormRef