import { useRef } from "react";
import { SimplePagination } from "../../components/pagination/SimplePagination";

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

function VideoDisplay() {
  const videoRef = useRef();

  const handleMouseEnter = () => {
    videoRef.current.controls = true;
    videoRef.current.play();
  };

  const handleMouseLeave = () => {
    videoRef.current.controls = false;
    videoRef.current.pause();
  };
  return (
    <video
      ref={videoRef}
      className="h-full w-full rounded-lg"
      muted
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <source
        src="https://docs.material-tailwind.com/demo.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
  );
}
