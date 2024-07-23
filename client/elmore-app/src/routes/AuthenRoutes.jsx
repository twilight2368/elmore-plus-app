import { Route, Routes } from "react-router-dom";
import AuthenticateLayouts from "../layouts/AuthenticateLayouts";
import Login from "../authentication/login/Login";
import Register from "../authentication/register/Register";
export default function AuthenRoutes() {
  return (
    <Routes>
      <Route element={<AuthenticateLayouts />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<>hello world</>} />
      </Route>
    </Routes>
  );
}
