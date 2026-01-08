import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={theme}>
      <h2>Navbar - {theme} mode</h2>
    </nav>
  );
};

export default NavBar;
