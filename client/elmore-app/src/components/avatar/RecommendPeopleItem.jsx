import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Card, CardBody, IconButton } from "@material-tailwind/react";

export default function RecommendPeopleItem() {
  return (
    <div>
      <Card className="shadow-none h-16 flex px-2 justify-center hover:bg-blue-gray-100/10">
        <CardBody className=" p-0">
          <div className="flex flex-row justify-around items-center h-full">
            <div className="w-1/6 h-full ">
              <Avatar
                src="https://i.pinimg.com/736x/03/51/0d/03510d20f7555048e3eb4bb4e5cfe102.jpg"
                alt="avatar"
                className=" p-[1px] w-full h-auto"
              />
            </div>
            <div className="w-1/2">
              <div className="w-full ">
                <p className=" text-sm font-bold truncate hover:underline">
                  Gumball Waterson Tristopher
                </p>
              </div>
              <div className=" text-xs">
                <span>1000</span> <span>friends</span>
              </div>
            </div>
            <div className="w-1/4 flex justify-center items-center">
              <IconButton variant="outlined">
                <FontAwesomeIcon icon={faUserPlus} />
              </IconButton>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
