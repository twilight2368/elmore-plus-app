import { TypingIndicator } from "@chatscope/chat-ui-kit-react";
import PropTypes from "prop-types";
export default function ChatHeader({ isTyping, username }) {
  return (
    <>
      {isTyping ? (
        <>
          <div className="h-full flex items-center justify-center border-b-[1px] border-blue-200 bg-blue-100/5 backdrop-blur-sm ">
            <TypingIndicator content={username + " " + "is typing"} />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

ChatHeader.propTypes = {
  isTyping: PropTypes.bool,
  username: PropTypes.string,
};
