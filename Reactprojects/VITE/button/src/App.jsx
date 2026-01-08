import React, { useState } from "react";

const App = () => {
  const [showText, setShowText] = useState(false);
  const [isCircle, setIsCircle] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>
        Text
      </button>
      {showText && <p>Hello React</p>}

      <br /><br />

      <button onClick={() => setIsCircle(!isCircle)}>
        Shape
      </button>

      <div
        style={{
          width: "100px",
          height: "100px",
          background: "orange",
          borderRadius: isCircle ? "50%" : "0",
          marginTop: "10px"
        }}
      ></div>
    </div>
  );
};

export default App;
