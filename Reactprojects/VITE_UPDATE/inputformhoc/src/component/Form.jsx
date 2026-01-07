import React from "react";

const Form = ({
  input,submittedData,handleChange,handleSubmit,
}) => {
  return (
    <div>
      <h2>HOC Form Example</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={handleChange} placeholder="Enter something"/>
        <button type="submit">Submit</button>
      </form>

      {submittedData && <h3>Submitted: {submittedData}</h3>}
    </div>
  );
};

export default Form;
