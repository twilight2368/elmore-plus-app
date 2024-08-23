import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@material-tailwind/react";

export default function MiniPostMain() {
  return (
    <div className="flex flex-col gap-2 h-24 pl-2">
      <div className=" flex flex-row items-center gap-2 h-8">
        <div className="h-full">
          <Avatar
            src="https://i.pinimg.com/736x/03/51/0d/03510d20f7555048e3eb4bb4e5cfe102.jpg"
            alt="avatar"
            className=" w-auto h-full "
          />
        </div>
        <div>
          <span className=" font-semibold hover:underline">
            Gumball Waterson{" "}
          </span>
        </div>
      </div>
      <div className="h-full">
        <p className="h-1/2 w-full truncate text-sm hover:underline">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          non explicabo eius nihil nulla possimus in facere repudiandae dolores,
          alias veniam eveniet voluptatem similique praesentium qui dolorem
          exercitationem, velit odio!
        </p>
        <div className="flex flex-row items-baseline justify-start gap-2 text-xs">
          <div className="flex items-center gap-1 hover:text-red-300 ">
            <span>00000</span>
            <span>
              <FontAwesomeIcon icon={faHeart} />
            </span>
          </div>
          <div>&#8901;</div>
          <div className=" hover:text-blue-300">00000 Comments</div>
        </div>
      </div>
    </div>
  );
}
