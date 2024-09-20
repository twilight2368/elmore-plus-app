import ChatMainContent from "../../components/main/chat/ChatMainContent";
import ChatRightSidebar from "../../components/sidebar/chatsidebar/ChatRightSidebar";

export default function ChatPage() {
  return (
    <div className="w-full  h-full flex flex-row ">
      <div className="w-2/3 h-full">
        <ChatMainContent />
      </div>
      <div className="w-1/3 h-full">
        <ChatRightSidebar />
      </div>
    </div>
  );
}
