import RecentPost from "./minisidebar/RecentPost";
import RecommendFriends from "./minisidebar/RecommendFriends";
import TrendingHastags from "./minisidebar/TrendHastag";

export default function SecondaryMainSideBar() {
  return (
    <>
      <div className="p-3 w-full h-full overflow-auto custom-scroll ">
        <div className="w-full mb-6">
          <RecentPost />
        </div>
        <div className="w-full mb-6">
          <TrendingHastags />
        </div>
        <div className="w-full mb-10">
          <RecommendFriends />
        </div>

        <div className=" text-center text-xs text-gray-500">
          <span className="hover:underline">Terms of Use</span>{" "}
          <span>&sdot;</span>{" "}
          <span className="hover:underline">Privacy Policy</span>{" "}
          <span>&sdot;</span>{" "}
          <span className="hover:underline">Cookie Policy </span> <br />
          <span className="hover:underline">Accessibility</span>{" "}
          <span>&sdot;</span>{" "}
          <span className="hover:underline">Advertisement Information</span>
        </div>
      </div>
    </>
  );
}
