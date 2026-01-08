import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import ToggleButton from "./component/ToggleButton";
import { ThemeContext } from "./context/ThemeContext";


const App = () => {
  return (
    <ThemeContext>
      <NavBar/>
      <ToggleButton/>
      <Footer/>
    </ThemeContext>
  );
};

export default App;
