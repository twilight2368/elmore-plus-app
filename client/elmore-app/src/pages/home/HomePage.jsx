import SecondaryMainSideBar from "../../components/sidebar/SecondaryMainSideBar";
import "../../css/CustomOne.css";
import MakePostInput from "../../components/makepost/makepostinput/MakePostInput";
import MainContent from "../../components/main/MainContent";
import FriendMainSidebar from "../../components/sidebar/FriendMainSidebar";
export default function HomePage() {
  return (
    <div className="relative w-full flex flex-row justify-between">
      <div className="ml-14  w-1/2 pt-20 min-h-screen">
        <div className="w-full">
          <div className="w-full mb-6">
            <MakePostInput />
          </div>
          <div className="w-full">
            <MainContent />
          </div>
        </div>
      </div>
      <div className=" w-1/3 px-5 border-l-[1px] border-blue-100 custom-height sticky top-16">
        <SecondaryMainSideBar />
      </div>
      <div className="w-16 sticky top-16 mt-16 custom-height border-l-[1px] border-blue-100 bg-white">
        <FriendMainSidebar />
      </div>
    </div>
  );
}
