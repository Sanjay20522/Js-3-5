import React, { useState } from "react";

const ScrollView = () => {
  const [active, setActive] = useState("");

  const handleScroll = (section) => {
    setActive(section);

    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <nav style={{ position: "fixed", top: 0, width: "100%", background: "#eee" }}>
        <button onClick={() => handleScroll("home")}>Home</button>
        <button onClick={() => handleScroll("about")}>About</button>
        <button onClick={() => handleScroll("contact")}>Contact</button>
      </nav>

      <section id="home" style={{ height: "100vh", paddingTop: "60px" }}>
        <h1>Home</h1>
      </section>

      <section id="about" style={{ height: "100vh", paddingTop: "60px" }}>
        <h1>About</h1>
      </section>

      <section id="contact" style={{ height: "100vh", paddingTop: "60px" }}>
        <h1>Contact</h1>
        </section>

      <h1>{active}</h1>
    </div>
  );
};

export default ScrollView;
