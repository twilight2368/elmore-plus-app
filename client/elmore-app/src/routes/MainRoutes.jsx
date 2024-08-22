import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/home/HomePage";

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="chat" element={<></>} />
          <Route path="notification" element={<></>} />
          <Route path="friends" element={<></>} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>
      </Routes>
    </>
  );
}
