
import SecondaryMainSideBar from "../../components/sidebar/SecondaryMainSideBar";
import "../../css/CustomOne.css";
import MakePostInput from "../../components/makepost/makepostinput/MakePostInput";
import MainContent from "../../components/main/MainContent";
export default function HomePage() {
  return (
    <div className="relative w-full flex flex-row justify-between">
      <div className=" w-3/5 pt-20 min-h-screen">
        <div className="w-full">
          <div className="w-full mb-6">
            <MakePostInput />
          </div>
          <div className="w-full">
            <MainContent />
          </div>
        </div>
      </div>
      <div className=" w-1/3 border-l-[1px] border-blue-100 custom-height sticky top-16">
        <SecondaryMainSideBar />
      </div>
    </div>
  );
}
