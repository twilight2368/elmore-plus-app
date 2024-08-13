import { NavLink } from "react-router-dom";
import LogoMain from "../logos/LogoMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faComments, faHouse } from "@fortawesome/free-solid-svg-icons";
import { Input, Avatar, Typography } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
export default function HomeNavbar() {
  return (
    <>
      <div className="h-full w-full border-b-[1px]  border-blue-100 flex flex-row items-center bg-white">
        <div className=" w-1/5 flex justify-center items-center">
          <LogoMain />
        </div>
        <div className=" w-1/3 h-full flex items-center gap-10 pl-10 ">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? " text-blue-300 flex flex-row items-center gap-1"
                : " flex items-center gap-1"
            }
          >
            <FontAwesomeIcon icon={faHouse} />
            <span>Home</span>
          </NavLink>

          <NavLink
            to="/chat"
            className={({ isActive }) =>
              isActive
                ? " text-blue-300 flex items-center gap-1"
                : " flex items-center gap-1"
            }
          >
            <FontAwesomeIcon icon={faComments} />
            <span>Chat</span>
          </NavLink>
        </div>
        <div className=" w-1/4 h-full flex justify-center items-center">
          <div className=" w-2/3 h-full flex flex-col justify-center">
            <Input variant="outlined" label="Search" />
          </div>
        </div>
        <div className="pl-10 flex flex-row items-center gap-10">
          <div className="flex items-center gap-2 p-2">
            <Avatar
              src="https://docs.material-tailwind.com/img/face-2.jpg"
              alt="avatar"
              className=" h-10 w-10"
            />
            <div>
              <Typography
                variant="small"
                color="gray"
                className="font-normal text-black font-bold"
              >
                Tania Andrew
              </Typography>
              <Typography className=" text-xs ">Online</Typography>
            </div>
          </div>
          <div>
            <Menu>
              <MenuHandler>
                <IconButton variant="text" className="p-0">
                  <FontAwesomeIcon icon={faBars} size="big" />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
              </MenuList>
            </Menu>
          </div>
        </div>
      </div>
    </>
  );
}
