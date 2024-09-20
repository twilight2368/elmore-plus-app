import { Spinner } from "@material-tailwind/react";
import FriendItem from "../../components/small/FriendItem";

export default function AllFriends() {
  return (
    <div className="w-full pb-10">
      <div className="w-full text-center mt-5 mb-5">
        <h2 className=" text-2xl font-semibold">All friends (12 friends)</h2>
      </div>
      <div className="w-full p-6 pt-0 grid grid-cols-4 gap-x-5 gap-y-10">
        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>
        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>
        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>
        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>
        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>
        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>

        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>
        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>
        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>
        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>
        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>
        <div>
          <FriendItem username={"Gumball waterson"} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Spinner color="blue" />
      </div>
    </div>
  );
}
