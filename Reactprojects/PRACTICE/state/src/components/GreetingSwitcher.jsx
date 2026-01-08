import React, { useState } from "react";

const GreetingSwitcher = () => {
  const [message, setMessage] = useState("Welcome");

  return (
    <div>
      <h2>{message}</h2>

      <button onClick={() => setMessage("Welcome")}>
        Welcome
      </button>

      <button onClick={() => setMessage("Good Morning")}>
        Good Morning
      </button>

      <button onClick={() => setMessage("Good Night")}>
        Good Night
      </button>
    </div>
  );
};

export default GreetingSwitcher;
