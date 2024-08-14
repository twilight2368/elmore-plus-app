import { faHashtag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card, CardBody } from "@material-tailwind/react";
import PropTypes from "prop-types";

export default function TrendingHastags() {
  return (
    <div id="trending-hastags">
      <Card className="p-1 m-0 shadow-none ">
        <CardBody className="p-3 mb-3">
          <div className="mb-3">
            <h2 className=" font-bold ">Hastags in Elmore </h2>
          </div>
          {/**5 items only  */}
          <div className="flex flex-col gap-1">
            <HastagItem hastag="hello world" numOfPost={100000} />
            <HastagItem hastag="hello world" numOfPost={100000} />
            <HastagItem hastag="hello world" numOfPost={100000} />
            <HastagItem hastag="hello world" numOfPost={100000} />
            <HastagItem hastag="hello world" numOfPost={100000} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

function HastagItem({ hastag, numOfPost }) {
  return (
    <>
      <div className="flex gap-1">
        <span>
          <FontAwesomeIcon icon={faHashtag} />
        </span>
        <span className=" hover:underline hover:text-blue-300 ">{hastag}</span>
      </div>
      <div className="text-xs pl-5">{numOfPost} posts</div>
    </>
  );
}

HastagItem.propTypes = {
  hastag: PropTypes.string.isRequired,
  numOfPost: PropTypes.string,
};
