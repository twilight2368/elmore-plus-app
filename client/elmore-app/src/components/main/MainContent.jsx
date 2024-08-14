import FriendMainSidebar from "../sidebar/FriendMainSidebar";
import MainSidebar from "../sidebar/MainSidebar";
import SecondaryMainSideBar from "../sidebar/SecondaryMainSideBar";
import "../../css/CustomOne.css";
import MakePostInput from "../makepost/makepostinput/MakePostInput";
import MainPost from "../post/mainpost/MainPost";
export default function MainContent() {
  return (
    <div className=" relative w-full min-h-screen bg-gray-50 ">
      <div className="fixed h-screen top-16 w-1/5 border-r-[1px] border-blue-200 z-10 bg-white  ">
        <MainSidebar />
      </div>

      <div className="relative w-full flex flex-row justify-between">
        <div className="w-1/5">{/**Nothing display here */}</div>
        <div className=" pt-20 w-5/12 min-h-screen">
          <div className="w-full">
            <div className="w-full mb-6">
              <MakePostInput />
            </div>
            <div className="w-full flex flex-col gap-6">
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
              <MainPost />
            </div>
          </div>
        </div>
        <div className=" w-1/4 border-l-[1px] border-blue-100 custom-height sticky top-16">
          <SecondaryMainSideBar />
        </div>
        <div className="w-16 sticky top-16 custom-height border-l-[1px] border-blue-100 bg-white">
          <FriendMainSidebar />
        </div>
      </div>
    </div>
  );
}
