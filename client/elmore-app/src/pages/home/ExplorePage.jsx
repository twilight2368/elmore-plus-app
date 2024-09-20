import { Input } from "@material-tailwind/react";
import HashtagItem from "../../components/small/HastagItem";
import RecommendFriends from "../../components/sidebar/minisidebar/RecommendFriends";
import MiniFooter from "../../components/footer/MiniFooter";

export default function ExplorePage() {
  return (
    <div className=" flex flex-row min-h-96">
      <div className="relative w-2/3 px-20 pb-32 border-r-[1px] border-blue-300 ">
        <div className="w-full sticky top-16 bg-gray-50 ">
          <Input
            variant="standard"
            size="lg"
            placeholder="Explore Elmore here..."
          />
        </div>
        {/** 12 items max */}
        <div className="w-full mt-5 flex flex-col gap-2 ">
          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />

          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />

          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />

          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />
          <HashtagItem hashtag="helloworld" numOfPost={1000} />
        </div>
      </div>
      <div className=" relative w-1/3 ">
        <div className="mx-auto w-11/12 sticky top-20">
          <RecommendFriends />
          <div className="mt-6">
            <MiniFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
