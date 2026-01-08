import React from "react";
import ThemeProvider from "./ThemeContext";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ToggleBtn from "./component/ToggleBtn";

const App = () => {
  return (
    <ThemeProvider>
      <NavBar />
      <ToggleBtn />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
