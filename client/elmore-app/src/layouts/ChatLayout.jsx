import { Outlet } from "react-router-dom";
import ChatLeftSidebar from "../components/sidebar/chatsidebar/ChatLeftSidebar";
import "../css/CustomOne.css";
export default function ChatLayout() {
  return (
    <>
      <div className="custom-height mt-16 flex flex-row ">
        <div className="h-full w-1/4">
          <ChatLeftSidebar />
        </div>
        <div className="w-3/4 h-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
