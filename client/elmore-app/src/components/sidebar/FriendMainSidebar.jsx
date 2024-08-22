import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AvatarFriendItem from "../avatar/AvatarFriendItem";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

export default function FriendMainSidebar() {
  return (
    <div className="w-full h-full">
      <div className=" w-full h-5/6  py-2 px-3 flex flex-col items-center gap-2 ">
        <AvatarFriendItem borderInclude={true} userName={"Gumball Watterson"} />
        <AvatarFriendItem borderInclude={true} userName={"Gumball Watterson"} />
        <AvatarFriendItem borderInclude={true} userName={"Gumball Watterson"} />
        <AvatarFriendItem borderInclude={true} userName={"Gumball Watterson"} />
        <AvatarFriendItem borderInclude={true} userName={"Gumball Watterson"} />
        <AvatarFriendItem
          borderInclude={false}
          userName={"Gumball Watterson"}
        />
        <AvatarFriendItem
          borderInclude={false}
          userName={"Gumball Watterson"}
        />
        <AvatarFriendItem
          borderInclude={false}
          userName={"Gumball Watterson"}
        />
        <AvatarFriendItem
          borderInclude={false}
          userName={"Gumball Watterson"}
        />
        <AvatarFriendItem
          borderInclude={false}
          userName={"Gumball Watterson"}
        />
        <AvatarFriendItem
          borderInclude={false}
          userName={"Gumball Watterson"}
        />
      </div>
      <div className=" flex justify-center items-center w-full h-1/6">
        <Menu placement="right-end" allowHover={true}>
          <MenuHandler>
            <IconButton variant="text">
              <FontAwesomeIcon icon={faEllipsis} size="xl" />
            </IconButton>
          </MenuHandler>
          <MenuList>
            <MenuItem>All friends</MenuItem>
            <MenuItem>Friend requests </MenuItem>
            <MenuItem>Block</MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
}
