import { faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import MainPost from "./MainPost";

export default function SharedPost({ personShare }) {
  return (
    <div className="w-full">
      <div className="text-gray-600 flex flex-row gap-2 items-center text-sm mb-1 px-3">
        <span>
          <FontAwesomeIcon icon={faShare} className="text-sm" />
        </span>
        <span className="text-black font-bold">{personShare}</span>
        <span>shared this post.</span>
      </div>
      <MainPost/>
    </div>
  );
}
SharedPost.propTypes = {
  personShare: PropTypes.string,
};
