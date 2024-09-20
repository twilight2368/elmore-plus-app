import { Input } from "@material-tailwind/react";

import FriendHorizontalItem from "../../components/small/FriendHorizontalItem";
import { SimplePagination } from "../../components/pagination/SimplePagination";
export default function UserFriendsLists() {
  return (
    <div className="w-full px-10">
      <div className="flex flex-row justify-between items-center mb-6">
        <div className="fredoka-font text-lg font-bold flex justify-center items-center">
          Friends (12 people)
        </div>
        <div className="flex justify-center items-center w-1/3">
          <Input variant="standard" label="Search..." />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <FriendHorizontalItem />
        <FriendHorizontalItem />
        <FriendHorizontalItem />
        <FriendHorizontalItem />
        <FriendHorizontalItem />
        <FriendHorizontalItem />
        <FriendHorizontalItem />
        <FriendHorizontalItem />
        <FriendHorizontalItem />
        <FriendHorizontalItem />
        <FriendHorizontalItem />
        <FriendHorizontalItem />
      </div>
      <div className="mt-6 flex justify-center items-center">
        <SimplePagination />
      </div>
    </div>
  );
}
