import { Navigate, Route, Routes } from "react-router-dom";
import SecondaryLayout from "../layouts/SecondaryLayout";
import HomePage from "../pages/home/HomePage";
import ExplorePage from "../pages/home/ExplorePage";
import NotificationPage from "../pages/notifications/NotificationPage";
import AllFriends from "../pages/friendsList/AllFriends";
import UserProfileRoutes from "./UserProfileRoutes";

export default function SecondaryRoute() {
  return (
    <>
      <Routes>
        <Route element={<SecondaryLayout />}>
          <Route path="home" element={<HomePage />} />
          <Route path="explore" element={<ExplorePage />} />
          <Route path="notification" element={<NotificationPage />} />
          <Route path="friends" element={<AllFriends />} />
          <Route
            path="profile"
            element={<Navigate to="/profile/current_user" />}
          />
          <Route path="profile/:id/*" element={<UserProfileRoutes />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Route>
      </Routes>
    </>
  );
}

{
  //! NOTE <Navigate path="profile" to="id" />
  /**@param id: current user id */
}
