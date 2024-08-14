import { Typography } from "@material-tailwind/react";
import MainLogoFooterImage from "../../assets/images/logo/323-3233528_gumball-transparent-rainbow-amazing-world-of-gumball-rainbow-transparent.png";
export default function MainFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full text-gray-600 text-xs ">
      <div className="w-full justify-center items-center">
        <img src={MainLogoFooterImage} alt="" className=" h-12 mx-auto " />
      </div>
      <Typography className="text-center font-normal text-xs">
        &copy; {year} Elmore plus. All Rights Reserved.
      </Typography>
    </footer>
  );
}
