
import MiniPostMain from '../../post/minipost/MiniPostMain';
import { Card, CardBody } from "@material-tailwind/react";

export default function RecentPost() {
  return (
    <div id="Recent-post">
      <Card className="p-1 m-0 shadow-none ">
        <CardBody className="p-3">
          <div className="mb-3">
            <h2 className=" font-bold ">Recent posts</h2>
          </div>
          <div className="mb-3 flex flex-col gap-2">
            {/**3 items only  */}
            <MiniPostMain />
            <MiniPostMain />
            <MiniPostMain />
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
