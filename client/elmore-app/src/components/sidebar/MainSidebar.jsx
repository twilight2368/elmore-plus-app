import { faBell, faHashtag, faHome, faUser, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { List, ListItem } from "@material-tailwind/react";
import { useState } from "react";

export default function MainSidebar() {
  const [selected, setSelected] = useState(1);
  const setSelectedItem = (value) => setSelected(value);
  return (
    <div className="overflow-auto pl-12 pr-8 py-4">
      <div id="list-main-menu" className=" text-black ">
        <List className=" flex flex-col gap-5">
          <ListItem
            selected={selected === 1}
            onClick={() => setSelectedItem(1)}
            className="flex flex-row gap-2 items-stretch"
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Home</span>
          </ListItem>
          <ListItem
            selected={selected === 2}
            onClick={() => setSelectedItem(2)}
            className="flex flex-row gap-2 items-stretch"
          >
            <FontAwesomeIcon icon={faHashtag} />
            <span>Explore</span>
          </ListItem>
          <ListItem
            selected={selected === 3}
            onClick={() => setSelectedItem(3)}
            className="flex flex-row gap-2 items-stretch"
          >
            <FontAwesomeIcon icon={faBell} />
            <span>Notifications</span>
          </ListItem>
          <ListItem
            selected={selected === 4}
            onClick={() => setSelectedItem(4)}
            className="flex flex-row gap-2 items-stretch"
          >
            <FontAwesomeIcon icon={faUserGroup} />
            <span>Friends</span>
          </ListItem>
          <ListItem
            selected={selected === 5}
            onClick={() => setSelectedItem(5)}
            className="flex flex-row gap-2 items-stretch"
          >
            <FontAwesomeIcon
              icon={faUser}
            />
            <span>Profile</span>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
