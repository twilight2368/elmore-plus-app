import { Spinner } from "@material-tailwind/react";

function FullScreenLoader() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Spinner className="h-48 w-48" />
    </div>
  )
}

export default FullScreenLoader