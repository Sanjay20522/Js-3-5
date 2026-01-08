import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return <h3>Footer Theme: {theme}</h3>;
};

export default Footer;
