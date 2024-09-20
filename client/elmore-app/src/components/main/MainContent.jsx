import MainPost from "../post/mainpost/MainPost";
import SharedPost from "../post/mainpost/SharedPost";
export default function MainContent() {
  return (
    <div className="w-full flex flex-col gap-10">
      <SharedPost personShare={"Gumball Waterson"} />
      <MainPost />
      <MainPost />
      <MainPost />
      <SharedPost personShare={"Gumball Waterson"} />
      <MainPost />
      <MainPost />
      <SharedPost personShare={"Gumball Waterson"} />
      <MainPost />
      <MainPost />
      <div className=" text-center">End.</div>
    </div>
  );
}
