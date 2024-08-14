import {
  Avatar,
  Button,
  Card,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import PropTypes from "prop-types";
import { Carousel } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMessage,
  faShare,

} from "@fortawesome/free-solid-svg-icons";
export default function MainPost() {
  return (
    <>
      <Card className="w-full">
        <CardBody className="h-full w-full">
          <div className="w-full h-12 mb-3">
            <HeaderPost />
          </div>
          <div className="w-full mb-6">
            <PostTextContent />
          </div>
          <div className="w-full mb-6">
            <FileContent />
          </div>
          <div className="w-full mb-0">
            <IconToolDisplay />
          </div>
        </CardBody>
      </Card>
    </>
  );
}

function HeaderPost() {
  return (
    <>
      <div className="flex flex-row gap-2 h-full">
        <div className="h-full flex justify-center items-center">
          <Avatar
            src="https://i.pinimg.com/736x/03/51/0d/03510d20f7555048e3eb4bb4e5cfe102.jpg"
            alt="avatar"
            className=" h-3/4 w-auto "
          />
        </div>
        <div className="w-11/12 flex flex-col justify-center ">
          <div className=" font-bold text-black hover:underline w-full">
            <p className=" truncate w-2/3">Gumball waterson</p>
          </div>
          <div className=" text-xs ">
            <span>an hour ago </span>
          </div>
        </div>
      </div>
    </>
  );
}

function PostTextContent() {
  return (
    <div className=" w-full">
      <p className="text-sm w-full line-clamp-6 ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea fuga dicta
        vitae voluptatem illo magni mollitia, asperiores minima id et aliquid
        harum porro dolorum! Vel quidem reprehenderit distinctio tenetur
        debitis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
        earum laudantium qui illum hic harum libero quae enim obcaecati
        distinctio modi reprehenderit quia, rerum tempore quisquam atque
        delectus non adipisci. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Esse est aliquam non tempora natus culpa earum quidem
        at, ipsa molestiae. Soluta unde cum repellendus autem quae quas tenetur
        totam doloribus?
      </p>
    </div>
  );
}

function FileContent({
  isHavingVideo,
  isHavingImage,
  isMultipleFiles,
  isHavingFiles,
}) {
  return (
    <>
      <div className="w-full h-96">
        <Carousel className="rounded-xl w-full h-full ">
          <video
            className="h-full w-full rounded-lg object-cover"
            autoPlay={false}
            controls
          >
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </>
  );
}

//? Use for testing only with real data will have to handle differently
FileContent.propTypes = {
  isHavingVideo: PropTypes.bool.isRequired,
  isHavingImage: PropTypes.bool.isRequired,
  isMultipleFiles: PropTypes.bool.isRequired,
  isHavingFiles: PropTypes.bool.isRequired,
};

function IconToolDisplay() {
  return (
    <>
      <div className=" flex flex-row justify-between items-center px-2">
        <div>
          <Button
            color="red"
            variant="text"
            size="sm"
            className="text-black hover:text-red-500 mr-2"
          >
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faHeart} /> {1000}
            </span>
          </Button>
          <Button
            color="orange"
            variant="text"
            size="sm"
            className="text-black hover:text-orange-500 mr-2"
          >
            <span className="flex items-center gap-1">
              <FontAwesomeIcon icon={faMessage} /> {1000}
            </span>
          </Button>
        </div>
        <div>
          <IconButton variant="text" color="blue">
            <FontAwesomeIcon icon={faShare} />
          </IconButton>
        </div>
      </div>
    </>
  );
}
