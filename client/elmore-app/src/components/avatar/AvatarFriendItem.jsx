import PropTypes from "prop-types";
import { Avatar, Tooltip } from "@material-tailwind/react";

export default function AvatarFriendItem({ borderInclude, userName }) {
  return (
    <>
      <Tooltip
        content={userName}
        placement="left"
        className=" text-black bg-blue-gray-50 "
      >
        <Avatar
          src="https://i.pinimg.com/736x/03/51/0d/03510d20f7555048e3eb4bb4e5cfe102.jpg"
          alt="avatar"
          withBorder={borderInclude}
          color="light-blue"
          className=" p-[1px] w-auto h-auto"
        />
      </Tooltip>
    </>
  );
}

AvatarFriendItem.propTypes = {
  borderInclude: PropTypes.bool,
  userName: PropTypes.string.isRequired,
};
