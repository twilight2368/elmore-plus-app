import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChatPageWelcome() {
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center gap-5 text-center text-3xl">
        <div className=" text-blue-300 text-6xl">
          <FontAwesomeIcon icon={faComments} />
        </div>
        <div className=" font-bold bungee-shade-font">
          {" "}
          Start chat with your friends{" "}
        </div>
      </div>
    </>
  );
}
