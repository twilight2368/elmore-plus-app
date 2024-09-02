import { faPoop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, CardBody, IconButton } from "@material-tailwind/react";

export default function FriendHorizontalItem() {
  return (
    <div className="w-full h-20">
      <Card className="shadow-none h-full flex px-2 justify-center hover:bg-blue-gray-100/10">
        <CardBody className="p-0">
          <div className="flex flex-row justify-around items-center h-full">
            <div className="w-1/6 h-full ">
              <Avatar
                src="https://i.pinimg.com/736x/03/51/0d/03510d20f7555048e3eb4bb4e5cfe102.jpg"
                alt="avatar"
                className=" p-[1px] h-full"
              />
            </div>
            <div className="w-1/2">
              <div className="w-full ">
                <p className=" text-sm font-bold truncate hover:underline">
                  Gumball Waterson Tristopher
                </p>
              </div>
            </div>
            <div className="w-1/4 flex justify-center items-center">
              <IconButton variant="outlined">
                <FontAwesomeIcon icon={faPoop} />
              </IconButton>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
