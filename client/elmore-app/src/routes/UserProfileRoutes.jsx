import { Route, Routes } from "react-router-dom";
import UserProfileLayout from "../layouts/UserProfileLayout";

import UserProfile from "../pages/profiles/UserProfile";
import UserImageGallery from "../pages/profiles/UserImageGallery";
import UserVideoGallery from "../pages/profiles/UserVideoGallery";
import UserFriendsLists from "../pages/profiles/UserFriendsLists";
import UserProfileErrorDisplay from "../pages/profiles/UserProfileErrorDisplay";

export default function UserProfileRoutes() {
  return (
    <>
      <Routes>
        <Route element={<UserProfileLayout />}>
          <Route index element={<UserProfile />} />
          <Route path="images" element={<UserImageGallery />} />
          <Route path="videos" element={<UserVideoGallery />} />
          <Route path="friends" element={<UserFriendsLists />} />
          <Route path="*" element={<UserProfileErrorDisplay />} />
        </Route>
      </Routes>
    </>
  );
}
