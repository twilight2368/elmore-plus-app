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
export default function Register() {
  const year = new Date().getFullYear();
  return (
    <>
      <Helmet>Register</Helmet>
      <div className="h-full flex justify-center items-center">
        <Card className=" w-1/2 h-4/5 p-8">
          <CardBody className=" h-full w-full p-0">
            <div className="mb-5">
              <div className=" fredoka-one-font text-xl">Sign up</div>
              <div>
                <span>Already have an account?</span>{" "}
                <span>
                  <Link
                    to="/auth/login"
                    className="text-blue-500 hover:underline focus:underline"
                  >
                    Sign in
                  </Link>
                </span>
              </div>
            </div>
            <div>
              <form className="flex flex-col w-full gap-3 mb-2">
                <Input
                  variant="outlined"
                  label="Username"
                  size="lg"
                  type="text"
                  required
                />
                <Input
                  variant="outlined"
                  label="Your email"
                  size="lg"
                  type="email"
                  required
                />
                <Input
                  variant="outlined"
                  label="Your password"
                  size="lg"
                  type="password"
                  required
                />
                <Input
                  variant="outlined"
                  label="Confirm password"
                  size="lg"
                  type="password"
                  required
                />
                <Checkbox
                  color="blue"
                  label="I agree to terms and conditions"
                />
                <Button>Register</Button>
              </form>
              <div className="text-center mb-5">
                <div className="mb-2">Or continue with</div>
                <div className="flex flex-row justify-center items-center gap-4">
                  <IconButton className="rounded bg-[#ea4335] hover:shadow-[#ea4335]/20 focus:shadow-[#ea4335]/20 active:shadow-[#ea4335]/10">
                    <i className="fab fa-google text-lg" />
                  </IconButton>
                  <IconButton className="rounded bg-[#1DA1F2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10">
                    <i className="fab fa-twitter text-lg" />
                  </IconButton>
                  <IconButton className="rounded bg-[#3029ff] hover:shadow-[#3029ff]/20 focus:shadow-[#3029ff]/20 active:shadow-[#3029ff]/10">
                    <i className="fab fa-facebook text-lg" />
                  </IconButton>
                </div>
              </div>
              <Typography  className="text-center font-normal text-gray-600 text-xs">
                &copy; {year} Elmore plus. All Rights Reserved.
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
}
