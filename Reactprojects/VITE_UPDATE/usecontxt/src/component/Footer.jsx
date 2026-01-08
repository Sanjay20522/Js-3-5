import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={theme}>
      <h2>Footer - {theme} mode</h2>
    </footer>
  );
};

export default Footer;
