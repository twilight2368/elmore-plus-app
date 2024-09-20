import { Conversation, Avatar } from "@chatscope/chat-ui-kit-react";
import { NavLink } from "react-router-dom";

export default function MyConversation({
  name,
  lastSender,
  lastMessage,
  avatarLink,
}) {
  return (
    <div>
      <NavLink to="id">
        <Conversation
          info="Hello world"
          lastSenderName="Gumball waterson"
          name="Gumball waterson"
        >
          <Avatar
            name="Gumball waterson"
            src="https://i.pinimg.com/736x/03/51/0d/03510d20f7555048e3eb4bb4e5cfe102.jpg"
          />
        </Conversation>
      </NavLink>
    </div>
  );
}
