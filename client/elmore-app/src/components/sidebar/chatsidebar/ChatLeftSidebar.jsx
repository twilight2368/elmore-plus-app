import MyConversation from "../../chat/MyConversation";
import { Search } from "@chatscope/chat-ui-kit-react";
export default function ChatLeftSidebar() {
  return (
    <div
      className="relative w-full h-full overflow-y-auto border-r-[1px] border-blue-300 custom-scroll"
      style={{ direction: "rtl" }}
    >
      <div className="px-3 py-2 w-full" style={{ direction: "ltr" }}>
        <Search placeholder="Search..." />
      </div>
      <div className="w-full pt-2" style={{ direction: "ltr" }}>
        <MyConversation />
        <MyConversation />
        <MyConversation />
        <MyConversation />
        <MyConversation />
        <MyConversation />
        <MyConversation />
        <MyConversation />
        <MyConversation />
        <MyConversation />
        <MyConversation />
        <MyConversation />
        <MyConversation />
        <MyConversation />
      </div>
    </div>
  );
}
