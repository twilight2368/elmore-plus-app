import SecondaryMainSideBar from "../components/sidebar/SecondaryMainSideBar";
import UserBackgroundProfile from "../components/userprofile/UserBackgroundProfile";
import { NavLink, Outlet } from "react-router-dom";

export default function UserProfileLayout() {
  return (
    <>
      <div className="relative w-full flex flex-row justify-between">
        <div className="w-2/3  min-h-screen">
          <div className="w-full">
            <div>
              <UserBackgroundProfile />
            </div>
            <div className="fredoka-font h-10 sticky z-30 top-16 w-full backdrop-blur-sm bg-white/20 border-b-[0.5px] border-blue-100 text-sm flex flex-row">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive
                    ? "w-1/4 flex justify-center items-center duration-100 bg-blue-200/20"
                    : "w-1/4 flex justify-center items-center duration-100 hover:bg-blue-200/20"
                }
                end
              >
                Posts
              </NavLink>
              <NavLink
                to="images"
                className={({ isActive }) =>
                  isActive
                    ? "w-1/4 flex justify-center items-center duration-100 bg-blue-200/20"
                    : "w-1/4 flex justify-center items-center duration-100 hover:bg-blue-200/20"
                }
              >
                Images
              </NavLink>
              <NavLink
                to="videos"
                className={({ isActive }) =>
                  isActive
                    ? "w-1/4 flex justify-center items-center duration-100 bg-blue-200/20"
                    : "w-1/4 flex justify-center items-center duration-100 hover:bg-blue-200/20"
                }
              >
                Videos
              </NavLink>
              <NavLink
                to="friends"
                className={({ isActive }) =>
                  isActive
                    ? "w-1/4 flex justify-center items-center duration-100 bg-blue-200/20"
                    : "w-1/4 flex justify-center items-center duration-100 hover:bg-blue-200/20"
                }
              >
                Friends
              </NavLink>
            </div>
            <div className="pt-8 pb-20">
              <Outlet />
            </div>
          </div>
        </div>
        <div className=" w-1/3 px-5 border-l-[1px] border-blue-100 custom-height sticky top-16">
          <SecondaryMainSideBar />
        </div>
      </div>
    </>
  );
}
