import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainContent from "../components/main/MainContent";

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="home" element={<MainContent />} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </>
  );
}
