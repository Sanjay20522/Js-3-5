import React, { useState } from "react";

const ToggleBtn = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Jana Nayagan" : "Vijay Last Film"}
      </button>

      {show && <p>Jana Nayagan marks the final film in Thalapathy Vijay’s career</p>}
    </div>
  );
};

export default ToggleBtn;
