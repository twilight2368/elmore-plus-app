import { Helmet } from "react-helmet";
import NotFoundBGimg from "../../assets/images/backgrounds/the-amazing-world-of-gumball-wallpaper-47e9eabbd6fa15f5cc5da810887719e3.jpg";
import WelcomeFooter from "../../components/footer/WelcomeFooter";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
export default function NotFound() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>404 Not Found - Elmore plus</title>
      </Helmet>
      <div className="relative min-h-screen w-full">
        <div className=" absolute top-0 w-full h-full -z-10">
          <img
            src={NotFoundBGimg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative w-full h-screen bg-black/65 text-white">
          <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-2/3 text-center">
            <div className=" text-9xl fredoka-one-font mb-3">404</div>
            <div className="uppercase text-4xl fredoka-font font-semibold mb-6">
              Oop! page not found ...
            </div>
            <div>
              <Button
                variant="filled"
                className="fredoka-font"
                onClick={() => {
                  navigate("/");
                }}
              >
                Back to Homepage
              </Button>
            </div>
          </div>
        </div>
        <div className=" absolute bottom-5 w-full ">
          <WelcomeFooter />
        </div>
      </div>
    </>
  );
}
