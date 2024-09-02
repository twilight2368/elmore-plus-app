import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function UserProfileErrorDisplay() {
  return (
    <div className="text-center text-3xl font-bold">
      <FontAwesomeIcon icon={faRocket} className="mx-3" />
      <br />
      Something went wrong
    </div>
  );
}
