import { Outlet } from "react-router-dom";
import HomeNavbar from "../components/navbar/HomeNavbar";


export default function MainLayout() {
  return (
    <>
      {/**Navbar on top here */}
      <div className=" relative h-screen overflow-auto">
        <div className="fixed top-0 z-50 w-full h-16"><HomeNavbar/></div>
        <div className="h-screen">
          <Outlet />
        </div>
      </div>
    </>
  );
}
