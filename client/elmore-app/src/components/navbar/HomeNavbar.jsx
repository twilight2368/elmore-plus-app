import { NavLink, useLocation, useNavigate } from "react-router-dom";
import LogoMain from "../logos/LogoMain";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faComments,
  faHouse,
  faRocket,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import {
  Input,
  Avatar,
  Typography,
  Badge,
  Button,
} from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
export default function HomeNavbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  let location = useLocation();
  const navigate = useNavigate();

  //? Test purpose only
  useEffect(() => {
    //todo: Check connection before set to true
    setIsOnline(true);

    if (location.pathname === "/chat") {
      setShowBadge(false);
    } else {
      //todo: Check new chat coming before set show badge to "true"
      setShowBadge(true);
    }
  });

  return (
    <>
      <div className="h-full w-full fredoka-font border-b-[1px]  border-blue-100 flex flex-row items-center justify-between bg-white">
        <div className="w-1/5 flex justify-center items-center">
          <LogoMain />
        </div>
        <div className=" w-5/12 h-full flex justify-center items-center">
          <div className=" w-7/12 h-full flex flex-col justify-center">
            <Input
              variant="outlined"
              label="Search"
              icon={<FontAwesomeIcon icon={faRocket} />}
            />
          </div>
        </div>
        <div className="w-1/4 flex flex-row items-center justify-start gap-8">
          <div className="w-1/3">
            <div className=" w-full h-full flex flex-row gap-3 items-center">
              <IconButton
                variant="text"
                className="px-4 py-2 text-black rounded-full"
                onClick={() => {
                  navigate("/home");
                }}
              >
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    isActive
                      ? " text-blue-300 flex flex-row items-baseline  gap-1"
                      : " flex items-baseline gap-1"
                  }
                >
                  <FontAwesomeIcon icon={faHouse} size="lg" />
                </NavLink>
              </IconButton>

              <Badge invisible={!showBadge}>
                <IconButton
                  variant="text"
                  className="px-4 py-2 text-black rounded-full"
                  onClick={() => {
                    navigate("/chat");
                  }}
                >
                  <NavLink
                    to="/chat"
                    className={({ isActive }) => {
                      return isActive
                        ? " text-blue-300 flex items-baseline gap-1"
                        : " flex items-baseline gap-1";
                    }}
                  >
                    <FontAwesomeIcon icon={faComments} size="lg" />
                  </NavLink>
                </IconButton>
              </Badge>
            </div>
          </div>
          <div className="w-2/3 flex items-center gap-2 p-2">
            <Avatar
              src="https://i.pinimg.com/736x/03/51/0d/03510d20f7555048e3eb4bb4e5cfe102.jpg"
              alt="avatar"
              className=" w-1/6 h-auto "
            />
            <div className="w-5/6">
              <Typography
                variant="small"
                color="gray"
                className="font-normal w-full text-black font-bold"
              >
                <p className="truncate ">Gumball Waterson</p>
              </Typography>
              <Typography className=" text-xs flex flex-row items-baseline gap-1">
                <span>{isOnline ? "Online" : "Offline"}</span>
                <span>
                  <FontAwesomeIcon
                    icon={faSignal}
                    size="sm"
                    style={{ color: isOnline ? "#63E6BE" : "#FF0000" }}
                  />
                </span>
              </Typography>
            </div>
          </div>
        </div>
        <div className="w-16 flex justify-center items-center">
          <Menu placement="bottom-end">
            <MenuHandler>
              <IconButton variant="text" className="p-0">
                <FontAwesomeIcon icon={faBars} size="big" />
              </IconButton>
            </MenuHandler>
            <MenuList className="flex flex-col gap-2">
              <MenuItem className="px-3 py-2x">
                Your Information
              </MenuItem>
              <Menu
                placement="left-start"
                open={openMenu}
                handler={setOpenMenu}
                allowHover
                offset={15}
              >
                <MenuHandler className="flex items-center justify-between">
                  <MenuItem className="px-3 py-2">
                    Theme preference
                  </MenuItem>
                </MenuHandler>
                <MenuList>
                  <MenuItem className="px-3 py-2 text-xs">
                    <span>Light</span>
                  </MenuItem>
                  <MenuItem className="px-3 py-2 text-xs">
                    <span>Dark</span>
                  </MenuItem>
                </MenuList>
              </Menu>
              <MenuItem className="px-3 py-2 ">Settings</MenuItem>
              <MenuItem className="px-3 py-2 ">Help</MenuItem>
              <Button
                color="red"
                variant="text"
                size="sm"
                className=" text-start capitalize px-3 py-2"
              >
                Log out
              </Button>
            </MenuList>
          </Menu>
        </div>
      </div>
    </>
  );
}
