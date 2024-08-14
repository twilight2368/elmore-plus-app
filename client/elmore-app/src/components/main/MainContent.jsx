import FriendMainSidebar from "../sidebar/FriendMainSidebar";
import MainSidebar from "../sidebar/MainSidebar";
import SecondaryMainSideBar from "../sidebar/SecondaryMainSideBar";
import "../../css/CustomOne.css";
export default function MainContent() {
  return (
    <div className=" relative w-full min-h-screen bg-gray-50 ">
      <div className="fixed h-screen top-16 w-1/5 border-r-[1px] border-blue-200 z-10 bg-white  ">
        <MainSidebar />
      </div>

      <div className="relative w-full flex flex-row justify-between">
        <div className="w-1/5">{/**Nothing display here */}</div>
        <div className="  pt-16 w-5/12 min-h-screen">
          <div className="w-full  h-screen">1</div>
          <div className="w-full  h-screen">2</div>
          <div className="w-full  h-screen">2</div>
          <div className="w-full  h-screen">2</div>
          <div className="w-full  h-screen">2</div>
          <div className="w-full  h-screen">2</div>
        </div>
        <div className=" w-1/4 border-l-[1px] border-blue-100 custom-height sticky top-16">
          <SecondaryMainSideBar/>
        </div>
        <div className="w-16 sticky top-16 custom-height border-l-[1px] border-blue-100 bg-white">
          <FriendMainSidebar />
        </div>
      </div>
    </div>
  );
}
