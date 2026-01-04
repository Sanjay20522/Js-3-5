import React, { useState } from 'react'

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formData]);
    setFormData({ name: "", email: "" });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email"A />
        <button type="submit">Add</button>
      </form>

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}

  

export default App