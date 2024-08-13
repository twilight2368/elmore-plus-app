import "./App.css";
import "@fontsource/bungee-shade";
import "@fontsource-variable/fredoka";
import "@fontsource/fredoka-one";
import "@fontsource-variable/montserrat"; //? Supports weights 100-900
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/welcome/WelcomePage";
import AuthenRoutes from "./routes/AuthenRoutes";
import NotFound from "./pages/notfound/NotFound";
import MainRoutes from "./routes/MainRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/auth/*" element={<AuthenRoutes />} />
        <Route path="/*" element={<MainRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
