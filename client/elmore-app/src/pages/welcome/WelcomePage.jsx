import { Helmet } from "react-helmet";
import Logo from "../../components/logos/Logo";
import { Button } from "@material-tailwind/react";
import WelcomeFooter from "../../components/footer/WelcomeFooter";
import BGImg from "../../assets/images/backgrounds/The_elmore_wallpaper.webp";
import { useNavigate } from "react-router-dom";
export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Elmore Plus</title>
      </Helmet>
      <div className="min-h-screen w-full text-white relative select-none">
        <div className="relative top-0 w-full h-full">
          <img src={BGImg} alt="" className="w-full" />
        </div>
        <div className="absolute top-0 h-24 w-full flex flex-row  p-3">
          <div className=" w-1/4">
            <Logo />
          </div>
          <div className="w-1/2"></div>
          <div className="w-1/4 flex justify-center items-center gap-5">
            <Button
              className="fredoka-font"
              onClick={() => {
                navigate("/auth/login");
              }}
            >
              Login
            </Button>
            <Button
              className="fredoka-font"
              onClick={() => {
                navigate("/auth/register");
              }}
            >
              Register
            </Button>
          </div>
        </div>
        <div className="absolute top-1/3 right-1/2 translate-x-1/2 -translate-y-[100px] text-center fredoka-font">
          <div className=" text-2xl text-blue-400 font-semibold">
            Welcome to
          </div>
          <div className=" text-9xl fredoka-one-font text-blue-600 ">
            Elmore
          </div>
          <div className=" text-4xl text-green-600 font-bold ">
            Population weird
          </div>
          <div>
            <Button variant="outlined" className="mt-10">
              Get started
            </Button>
          </div>
        </div>
        <div className="absolute bottom-5 w-full">
          <WelcomeFooter />
        </div>
      </div>
    </>
  );
}
