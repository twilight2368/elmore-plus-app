import { faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Tooltip } from "@material-tailwind/react";

export default function ImageUploadButton() {
  return (
    <Tooltip content={"Image"} placement="top" className="bg-white border-[1px] border-blue-100  text-black">
      <div className="h-full w-full relative">
        <IconButton variant="text">
          <FontAwesomeIcon icon={faImage} size="lg" />
        </IconButton>
        <input
          className=" absolute top-0 h-full w-full z-10 block w-full opacity-0"
          type="file"
          accept="image/*"
        />
      </div>
    </Tooltip>
  );
}
