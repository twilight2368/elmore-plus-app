import { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Textarea,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faPenSquare } from "@fortawesome/free-solid-svg-icons";

import ImageUploadButton from "../../upload/iconbutton/ImageUploadButton";
import VideoUploadButton from "../../upload/iconbutton/VideoUploadButton";

//! Bug:not-show-menu import IconMenu from "../../iconmenu/IconMenu";

export default function MakePostDialog() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Make a post
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="w-full">
          <div className="w-full flex flex-row justify-between items-center">
            <div>Make news in Elmore</div>
            <div>
              <IconButton
                variant="text"
                color="red"
                onClick={handleOpen}
                className="mr-1 rounded-full"
              >
                <FontAwesomeIcon icon={faClose} size="lg" />
              </IconButton>
            </div>
          </div>
        </DialogHeader>
        <DialogBody className=" min-h-32 max-h-60 overflow-auto custom-scroll  ">
          <Textarea
            resize={true}
            label="Write your story now..."
            color="gray"
          />
        </DialogBody>
        <DialogFooter className="w-full flex flex-row justify-between items-center ">
          <div className="flex justify-start gap-2 ">
            <div>
              <ImageUploadButton />
            </div>
            <div>
              <VideoUploadButton />
            </div>
            {/* <div>
              <IconMenu />
            </div> */}
          </div>
          <Button variant="gradient" onClick={handleOpen} size="md">
            <span>
              <FontAwesomeIcon icon={faPenSquare} />
            </span>{" "}
            <span>Post</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
