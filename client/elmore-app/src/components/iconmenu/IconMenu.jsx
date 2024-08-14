import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";

import EmojisCompact from "emoji.json/emoji-compact.json";

export default function IconMenu() {
  return (
    <div className="h-full w-full relative">
      <Menu placement="bottom-start">
        <MenuHandler>
          <IconButton variant="text">
            <FontAwesomeIcon icon={faIcons} size="lg" />
          </IconButton>
        </MenuHandler>
        <MenuList className="grid grid-cols-9 w-96 max-h-60 overflow-auto custom-scroll ">
          {EmojisCompact.map((icon, i) => {
            return (
              <>
                <MenuItem className="flex justify-center items-center" key={i}>
                  {icon}
                </MenuItem>
              </>
            );
          })}
        </MenuList>
      </Menu>
    </div>
  );
}
