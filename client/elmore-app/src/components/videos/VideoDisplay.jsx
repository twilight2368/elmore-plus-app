import { useRef } from "react";
export default function VideoDisplay() {
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
