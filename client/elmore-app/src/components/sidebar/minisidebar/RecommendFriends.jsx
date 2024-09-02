import { Card, CardBody } from "@material-tailwind/react";
import RecommendPeopleItem from "../../avatar/RecommendPeopleItem";

export default function RecommendFriends() {
  return (
    <div className="w-full">
      <Card className="p-1 m-0 shadow-none ">
        <CardBody className="p-3">
          <div className=" mb-3 ">
            <h2 className=" font-bold ">People in Elmore</h2>
          </div>
          <div className=" flex flex-col gap-2 justify-center ">
            {/** 5 items only */}
            <RecommendPeopleItem />
            <RecommendPeopleItem />
            <RecommendPeopleItem />
            <RecommendPeopleItem />
            <RecommendPeopleItem />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
