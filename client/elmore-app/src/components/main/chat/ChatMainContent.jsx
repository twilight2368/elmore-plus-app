import "../../../css/CustomOne.css";
import ChatHeader from "../../chat/ChatHeader";
import PropTypes from "prop-types";
import IconMenu from "../../iconmenu/IconMenu";
import ImageUploadButton from "../../upload/iconbutton/ImageUploadButton";
import VideoUploadButton from "../../upload/iconbutton/VideoUploadButton";
import { IconButton, Input } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlane } from "@fortawesome/free-solid-svg-icons";
import { useState, useRef, useEffect } from "react";
import { Message } from "@chatscope/chat-ui-kit-react";

export default function ChatMainContent() {
  const [typing, setTyping] = useState(false);
  return (
    <div className="h-full relative">
      <div className="absolute top-0 w-full">
        <ChatHeader isTyping={typing} username={"Gumball Waterson"} />
      </div>
      <div className="h-[90%] overflow-auto no-scroll-bar">
        <ChatDisplayList />
      </div>
      <div className="h-[10%] flex items-center border-t-[1px] border-blue-200  ">
        <ChatInputDisplay setTyping={setTyping} />
      </div>
    </div>
  );
}

function ChatInputDisplay({ setTyping }) {
  return (
    <>
      <div className="w-full h-full flex flex-row items-center px-2">
        <div className="w-1/6 flex flex-row border-r-2 border-blue-100 pr-2">
          <IconMenu />
          <ImageUploadButton />
          <VideoUploadButton />
        </div>
        <div className="w-5/6 pl-2 flex flex-row gap-2">
          <Input
            variant="outlined"
            label="Write your message here ..."
            onChange={(e) => {
              setTyping(e.target.value.length !== 0);
            }}
            onSubmit={(e) => {
              console.log("====================================");
              console.log("Hello wewewe");
              console.log("====================================");
            }}
          />
          <IconButton>
            <FontAwesomeIcon icon={faPlane} className=" -rotate-90" />
          </IconButton>
        </div>
      </div>
    </>
  );
}

function ChatDisplayList({ chat }) {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chat]);
  return (
    <>
      {messages.map((m, i) => (
        <Message key={i} {...m.props} />
      ))}
      {messages.map((m, i) => (
        <Message key={i} {...m.props} />
      ))}
      {messages.map((m, i) => (
        <Message key={i} {...m.props} />
      ))}
      {messages.map((m, i) => (
        <Message key={i} {...m.props} />
      ))}
      {messages.map((m, i) => (
        <Message key={i} {...m.props} />
      ))}
      {messages.map((m, i) => (
        <Message key={i} {...m.props} />
      ))}
      {messages.map((m, i) => (
        <Message key={i} {...m.props} />
      ))}
      {messages.map((m, i) => (
        <Message key={i} {...m.props} />
      ))}
      <div ref={messagesEndRef} className="h-5" />
    </>
  );
}
ChatDisplayList.propTypes = {
  chat: PropTypes.array,
};

const messages = [
  {
    props: {
      model: {
        message: "Hello my friend",
        direction: "incoming",
        position: "single",
      },
    },
  },
  {
    props: {
      model: {
        message: "Hello my friend",
        direction: "outgoing",
        position: "single",
      },
    },
  },
];
