import { Outlet, useNavigate } from "react-router-dom";
import LogoImg from "../assets/images/logo/1-PhotoRoom.png-PhotoRoom.png";
import { Button } from "@material-tailwind/react";
import FullScreenLoader from "../components/loader/FullScreenLoader";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserProvider";
import { getUser } from "../apis/userApis";

export default function AuthenticateLayout() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await getUser()
        const data = response.data
        console.log(data)
        setUser(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUserInfo()
    setIsLoading(false)
  }, [])

  return (
    <>
      {
        isLoading
        ? <FullScreenLoader />
        : (
          <div className="grid grid-cols-2 min-h-screen bg-gray-100">
            <div className="h-full flex flex-col justify-center items-center gap-5">
              <div className="flex flex-row items-center gap-3">
                <div>
                  <img src={LogoImg} alt="" className="h-20 w-20" />
                </div>
                <div>
                  <div className="text-5xl fredoka-one-font uppercase font-black">
                    <span className="text-blue-500">elmore</span>{" "}
                    <span className="text-green-300">plus</span>
                  </div>
                </div>
              </div>
              <div className="text-xl font-semibold">
                Social media for weird people
              </div>
              <div>
                <Button
                  variant="outlined"
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Back
                </Button>
              </div>
            </div>
            <div>
              <Outlet />
            </div>
          </div>
        )
        
      }
    </>
  );
}
