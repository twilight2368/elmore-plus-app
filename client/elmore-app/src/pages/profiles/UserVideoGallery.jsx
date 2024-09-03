import { SimplePagination } from "../../components/pagination/SimplePagination";
import VideoDisplay from "../../components/videos/VideoDisplay";

export default function UserVideoGallery() {
  return (
    <div className="w-full px-8">
      <div className="grid grid-cols-1 gap-8 ">
        <VideoDisplay />
        <VideoDisplay />
        <VideoDisplay />
        <VideoDisplay />
      </div>
      <div className="mt-6 flex justify-center items-center">
        <SimplePagination />
      </div>
    </div>
  );
}
