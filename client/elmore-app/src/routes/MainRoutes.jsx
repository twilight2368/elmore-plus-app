import { Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import MainContent from "../components/main/MainContent";
import HomePage from "../pages/home/HomePage";

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="*" element={<></>} />
        </Route>
      </Routes>
    </>
  );
}
