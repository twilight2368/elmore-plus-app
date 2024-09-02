import { Avatar, Button } from "@material-tailwind/react";

export default function UserBackgroundProfile() {
  return (
    <div className="w-full h-96 relative">
      <div className="h-full relative border-b-2 border-blue-300">
        <img
          src="https://images5.alphacoders.com/949/949995.jpg"
          alt=""
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="absolute px-5 h-1/3 py-3 w-full bottom-0 bg-black/50">
        <div className="flex flex-row h-full justify-between items-center  ">
          <div className="h-full flex flex-row items-center justify-center">
            <Avatar
              src="https://i.pinimg.com/736x/03/51/0d/03510d20f7555048e3eb4bb4e5cfe102.jpg"
              alt="avatar"
              withBorder={true}
              color="light-blue"
              className="h-full w-auto "
            />
            <div className="h-1/2 px-3 pt-3">
              <p className="truncate text-white text-3xl font-black fredoka-one-font">
                Gumball waterson
              </p>
            </div>
          </div>
          <div>
            <Button variant="outlined" className="m-0">
              Do something
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
