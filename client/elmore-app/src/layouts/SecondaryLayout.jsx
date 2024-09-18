import { Outlet } from "react-router-dom";

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
        <div className=" w-4/5">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
