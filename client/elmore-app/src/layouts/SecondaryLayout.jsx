import { Outlet } from "react-router-dom";

import FriendMainSidebar from "../components/sidebar/FriendMainSidebar";
import MainSidebar from "../components/sidebar/MainSidebar";

import "../css/CustomOne.css";

export default function SecondaryLayout() {
  return (
    <div className=" relative w-full min-h-screen bg-gray-50 ">
      <div className="fixed h-screen top-16 w-1/5 border-r-[1px] border-blue-200 z-10 bg-white  ">
        <MainSidebar />
      </div>

      <div className="relative w-full flex flex-row justify-between">
        <div className=" w-1/5">{/**Nothing display here */}</div>
        <div className=" w-2/3">
          <Outlet />
        </div>
        <div className="w-16 sticky top-16 mt-16 custom-height border-l-[1px] border-blue-100 bg-white">
          <FriendMainSidebar />
        </div>
      </div>
    </div>
  );
}
