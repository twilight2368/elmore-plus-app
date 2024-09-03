import { Route, Routes } from "react-router-dom";
import ChatLayout from "../layouts/ChatLayout";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import ChatPageWelcome from "../pages/chat/ChatPageWelcome";
import ChatPage from "../pages/chat/ChatPage";

export default function ChatRoutes() {
  return (
    <Routes>
      <Route element={<ChatLayout />}>
        <Route index element={<ChatPageWelcome />} />
        <Route path=":id" element={<ChatPage />} />
        <Route />
      </Route>
    </Routes>
  );
}
