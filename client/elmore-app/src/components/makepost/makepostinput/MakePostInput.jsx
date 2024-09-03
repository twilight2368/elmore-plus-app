import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, CardBody, Textarea } from "@material-tailwind/react";
import ImageUploadButton from "../../upload/iconbutton/ImageUploadButton";
import VideoUploadButton from "../../upload/iconbutton/VideoUploadButton";
import IconMenu from "../../iconmenu/IconMenu";

export default function MakePostInput() {
  return (
    <>
      <div>
        <Card>
          <CardBody>
            <h2 className="text-black font-black fredoka-font text-lg mb-2">
              {"What's happening in Elmore now?"}
            </h2>
            <Textarea
              resize={true}
              variant="static"
              color="light-blue"
              className="min-h-full fredoka-one-font"
              placeholder="Write your story here..."
              labelProps={{
                className: "before:mr-0 after:ml-0",
              }}
            />
            <div className="flex flex-row justify-between items-center mt-2">
              <div className=" flex flex-row gap-3">
                <ImageUploadButton />
                <VideoUploadButton />
                <IconMenu placement={"bottom-center"} />
              </div>
              <div>
                <Button
                  size="sm"
                  variant="outlined"
                  className="flex gap-1 justify-around items-center "
                >
                  <span>
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </span>
                  <span>Post</span>
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
