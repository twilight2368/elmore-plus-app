import MiniFooter from "../footer/MiniFooter";
import RecentPost from "./minisidebar/RecentPost";
import RecommendFriends from "./minisidebar/RecommendFriends";
import TrendingHashtags from "./minisidebar/TrendingHashtags";

export default function SecondaryMainSideBar() {
  return (
    <>
      <div className="p-3 w-full h-full overflow-auto custom-scroll ">
        <div className="w-full mb-6">
          <RecentPost />
        </div>
        <div className="w-full mb-6">
          <TrendingHashtags />
        </div>
        <div className="w-full mb-10">
          <RecommendFriends />
        </div>
        <div className="w-full mb-10">
          <MiniFooter />
        </div>
      </div>
    </>
  );
}
