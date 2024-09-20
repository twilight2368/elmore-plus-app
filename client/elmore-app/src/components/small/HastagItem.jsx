import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
export default function HashtagItem({ hashtag, numOfPost }) {
  return (
    <>
      <div className="rounded-lg hover:bg-gray-500/5 p-3">
        <div className="flex gap-1">
          <span>
            <FontAwesomeIcon icon={faHashtag} />
          </span>
          <span className=" hover:underline hover:text-blue-300 ">
            {hashtag}
          </span>
        </div>
        <div className="text-xs pl-5">{numOfPost} posts</div>
      </div>
    </>
  );
}

HashtagItem.propTypes = {
  hashtag: PropTypes.string.isRequired,
  numOfPost: PropTypes.number.isRequired,
};
