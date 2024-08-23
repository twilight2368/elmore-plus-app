import { Navigate, Route, Routes } from "react-router-dom";
import SecondaryLayout from "../layouts/SecondaryLayout";
import HomePage from "../pages/home/HomePage";

export default function SecondaryRoute() {
  return (
    <>
      <Routes>
        <Route element={<SecondaryLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="explore" element={<></>} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>
      </Routes>
    </>
  );
}
