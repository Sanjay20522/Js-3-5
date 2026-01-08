import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);

  return <h3>Navbar Theme: {theme}</h3>;
};

export default NavBar;
