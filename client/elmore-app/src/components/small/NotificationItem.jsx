import { faComments, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function NotificationItem({
  from,
  content,
  time,
  link,
  type,
  checked,
}) {
  const [hasRead, setHasRead] = useState(checked);
  return (
    <Link
      to={link}
      className={hasRead ? "" : "border-l-2 border-blue-300 bg-blue-100/20"}
      onClick={() => {
        setHasRead(!hasRead);
      }}
    >
      <div className="w-full h-20 flex flex-row gap-5 duration-100 rounded py-2 px-3 hover:bg-blue-gray-100/20">
        <div className=" w-1/12 text-2xl flex justify-center items-center">
          {type.toLowerCase() === "like" ? (
            <>
              <FontAwesomeIcon icon={faThumbsUp} />
            </>
          ) : (
            <></>
          )}
          {type.toLowerCase() === "comment" ? (
            <>
              <FontAwesomeIcon icon={faComments} />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="w-11/12 flex flex-col justify-center items-start">
          <div className=" line-clamp-3 font-light mb-2">
            <span className="font-bold mr-1">{from}</span>
            <span className="lowercase">{content}</span>
          </div>
          <div className="text-xs">{time}</div>
        </div>
      </div>
    </Link>
  );
}

NotificationItem.propTypes = {
  from: PropTypes.string,
  content: PropTypes.string,
  time: PropTypes.string,
  link: PropTypes.string,
  type: PropTypes.string,
  checked: PropTypes.bool,
};
