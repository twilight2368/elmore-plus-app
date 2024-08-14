import { faIcons } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
} from "@material-tailwind/react";

export default function IconMenu() {
  return (
    <div className="h-full w-full relative">
      <Menu placement="bottom">
        <MenuHandler>
          <IconButton variant="text">
            <FontAwesomeIcon icon={faIcons} size="lg" />
          </IconButton>
        </MenuHandler>
        <MenuList className="grid grid-cols-6 w-48"></MenuList>
      </Menu>
    </div>
  );
}
