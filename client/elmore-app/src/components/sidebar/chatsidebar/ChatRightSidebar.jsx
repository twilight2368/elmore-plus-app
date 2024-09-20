import "../../../css/CustomOne.css";
import ChatAccordingImage from "../../according/ChatAccordingImage";
import ChatAccordingVideo from "../../according/ChatAccordingVideo";
import FriendChatItem from "../../small/FriendChatItem";

export default function ChatRightSidebar() {
  return (
    <div className=" w-full h-full overflow-y-auto border-l-[1px] border-blue-300 custom-scroll">
      <div className="w-full h-full">
        <FriendChatItem username={"Gumball waterson"} />
        <ChatAccordingImage />
        <ChatAccordingVideo />
      </div>
    </div>
  );
}
