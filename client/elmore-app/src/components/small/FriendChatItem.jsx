import { Card, CardBody, Avatar, Button } from "@material-tailwind/react";
import PropTypes from "prop-types";
export default function FriendChatItem({ username }) {
  return (
    <div className="w-full h-60">
      <Card className="w-full h-full p-0 rounded-none shadow-none">
        <CardBody className="relative p-0 rounded-none h-full">
          <div className="h-full flex flex-col">
            <div className="w-full h-1/2">
              <img
                src="https://e1.pxfuel.com/desktop-wallpaper/92/662/desktop-wallpaper-top-gumball-backgrounds-gumball.jpg"
                alt=""
                className=" h-full w-full object-cover border-b-2 border-blue-300"
              />
            </div>
            <div className="text-center h-full">
              <div className="h-1/3"></div>
              <div className="h-1/4">
                <p className="truncate px-12 font-medium pt-2">{username}</p>
              </div>
              <div className="h-1/3">
                <Button variant="text" size="sm">Go to profile</Button>
              </div>
            </div>
          </div>
          <div className="absolute w-1/4 h-auto top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 ">
            <Avatar
              src="https://i.pinimg.com/736x/03/51/0d/03510d20f7555048e3eb4bb4e5cfe102.jpg"
              alt="avatar"
              withBorder={true}
              color="light-blue"
              className=" w-auto h-auto"
            />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

FriendChatItem.propTypes = {
  username: PropTypes.string,
};
