import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import SecondaryRoute from "./SecondaryRoute";
import ChatPage from "../pages/chat/ChatPage";

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/*" element={<SecondaryRoute />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>
      </Routes>
    </>
  );
}
