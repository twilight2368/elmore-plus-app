import { Card, CardBody } from "@material-tailwind/react";
import HashtagItem from "../../small/HastagItem";

export default function TrendingHashtags() {
  return (
    <div id="trending-hashtags">
      <Card className="p-1 m-0 shadow-none ">
        <CardBody className="p-3 mb-3">
          <div className="mb-3">
            <h2 className=" font-bold ">Hashtags in Elmore </h2>
          </div>
          {/**5 items only  */}
          <div className="flex flex-col gap-1">
            <HashtagItem hashtag="helloworld" numOfPost={1000} />
            <HashtagItem hashtag="helloworld" numOfPost={1000} />
            <HashtagItem hashtag="helloworld" numOfPost={1000} />
            <HashtagItem hashtag="helloworld" numOfPost={1000} />
            <HashtagItem hashtag="helloworld" numOfPost={1000} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
