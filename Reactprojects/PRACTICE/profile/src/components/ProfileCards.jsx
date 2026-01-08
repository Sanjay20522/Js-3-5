import React, { useEffect, useState } from "react";

const ProfileCards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        
        setUsers(data);
  });
  }, []);

  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {users.map(user => (
        <div
          key={user.id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            width: "200px"
          }}
        >
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
};

export default ProfileCards;
