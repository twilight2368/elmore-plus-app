import "./App.css";
import "@fontsource/bungee-shade";
import "@fontsource-variable/fredoka";
import "@fontsource/fredoka-one";
import "@fontsource-variable/montserrat"; //? Supports weights 100-900
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome/WelcomePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
      </Routes>
    </>
  );
}

export default App;
