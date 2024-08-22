import { Navigate, Route, Routes } from "react-router-dom";
import AuthenticateLayout from "../layouts/AuthenticateLayout";
import Login from "../authentication/login/Login";
import Register from "../authentication/register/Register";
export default function AuthenRoutes() {
  return (
    <Routes>
      <Route element={<AuthenticateLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Route>
    </Routes>
  );
}
