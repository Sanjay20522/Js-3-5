import React, { useState } from "react";

const withFormHandling = (WrappedComponent) => {
  return function EnhancedComponent() {
    const [input, setInput] = useState("");
    const [submittedData, setSubmittedData] = useState("");

    const handleChange = (e) => {
      setInput(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmittedData(input);
      setInput("");
    };

    return (
      <WrappedComponent input={input} submittedData={submittedData} handleChange={handleChange} handleSubmit={handleSubmit}
      />
    );
  };
};

export default withFormHandling;
