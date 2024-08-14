import { Helmet } from "react-helmet";
import {
  Card,
  CardBody,
  Button,
  Input,
  Checkbox,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { facebookAuth, signin } from "../../apis/authApis";
import { useContext, useState } from "react";
import { toast } from 'react-toastify';
import { UserContext } from "../../context/UserProvider";
import FacebookLogin from '@greatsumini/react-facebook-login';
import getGoogleOAuthUrl from "../../utils/getGoogleUrl";

export default function Login() {
  const year = new Date().getFullYear();
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmitLoginForm = async (event) => {
    event.preventDefault()

    try {
      console.log(import.meta.env.VITE_API_BASE_URL)
      const payload = { email, password }
      const response = await signin(payload)
      const data = response.data
      console.log(data)
      toast(data.message, { type: 'success' })
      setUser(data.data)
    } catch (error) {
      console.log(error.message)
      toast("Failed", { type: 'error' })
    }
  }

  const handleSignInGoogle = () => {
    window.location.href = getGoogleOAuthUrl()  
  }

  const handleAuthFacebook = async (response) => {
    const { accessToken, userID } = response;

    try {
      const res = await facebookAuth({ accessToken, userID })
      const data = res.data
      console.log('Login successful:', res.data);
      setUser(data.data)
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Elmore Plus</title>
      </Helmet>

      <div className="h-full flex justify-center items-center">
        <Card className=" w-1/2 h-2/3 p-8">
          <CardBody className=" h-full w-full p-0">
            <div className="mb-5">
              <div className=" fredoka-one-font text-xl">Sign in</div>
              <div>
                <span>Don&#x27;t have an account?</span>{" "}
                <span>
                  <Link
                    to="/auth/register"
                    className="text-blue-500 hover:underline focus:underline"
                  >
                    Sign up
                  </Link>
                </span>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmitLoginForm} className="flex flex-col w-full gap-3 mb-2">
                <Input
                  value={email}
                  variant="outlined"
                  label="Your email or username"
                  size="lg"
                  type="text"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  value={password}
                  variant="outlined"
                  label="Your password"
                  size="lg"
                  type="password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Checkbox color="blue" label="Remember me" />
                <Button type="submit">Log in</Button>
              </form>
              <div className="w-full text-center text-sm mb-2">
                <Link className=" text-blue-500 hover:underline focus:text-blue-500">
                  Forgot password
                </Link>
              </div>
              <div className="text-center mb-3">
                <div className="mb-2">Or continue with</div>
                <div className="flex flex-row justify-center items-center gap-4">
                  <IconButton onClick={handleSignInGoogle} className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                    <i className="fab fa-google text-lg" />
                  </IconButton>
                  <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                    <i className="fab fa-twitter text-lg" />
                  </IconButton>
                  <FacebookLogin
                    appId={import.meta.env.VITE_REACT_APP_FACEBOOK_APP_ID}
                    onSuccess={handleAuthFacebook}
                    onFail={(error) => console.error('Login failed:', error)}
                    render={({ onClick }) => (
                      <IconButton onClick={onClick} className="rounded bg-[#3029ff] hover:shadow-[#3029ff]/20 focus:shadow-[#3029ff]/20 active:shadow-[#3029ff]/10">
                        <i className="fab fa-facebook text-lg" />
                      </IconButton>
                    )}
                  />
                </div>
              </div>
              <Typography className="text-center font-normal text-gray-600 text-xs">
                &copy; {year} Elmore plus. All Rights Reserved.
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
