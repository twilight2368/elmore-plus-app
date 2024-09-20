import RecentPost from "../../components/sidebar/minisidebar/RecentPost";
import MiniFooter from "../../components/footer/MiniFooter";
import NotificationItem from "../../components/small/NotificationItem";

export default function NotificationPage() {
  return (
    <div className="w-full flex flex-row  ">
      <div className="w-2/3 border-r-[1px] border-blue-300">
        <div className="relative w-full px-20 pt-2 pb-32 ">
          <h2 className=" text-2xl font-semibold">Notifications</h2>

          <div className="flex flex-col gap-4 mt-5">
            <NotificationItem
              from={"Gumball waterson"}
              content={"Like your post"}
              time={"1 min ago"}
              type={"like"}
              checked={false}
            />

            <NotificationItem
              from={"Gumball waterson"}
              content={"Like your post"}
              time={"1 min ago"}
              type={"like"}
              checked={true}
            />

            <NotificationItem
              from={"Gumball waterson"}
              content={"Comment at your post"}
              time={"1 min ago"}
              type={"comment"}
              checked={false}
            />

            <NotificationItem
              from={"Gumball waterson"}
              content={"Comment at your post"}
              time={"1 min ago"}
              type={"comment"}
              checked={false}
            />

            <NotificationItem
              from={"Gumball waterson"}
              content={"Like your post"}
              time={"1 min ago"}
              type={"like"}
              checked={true}
            />

            <NotificationItem
              from={"Gumball waterson"}
              content={"Like your post"}
              time={"1 min ago"}
              type={"like"}
              checked={true}
            />

            <NotificationItem
              from={"Gumball waterson"}
              content={"Like your post"}
              time={"1 min ago"}
              type={"like"}
              checked={true}
            />

            <NotificationItem
              from={"Gumball waterson"}
              content={"Like your post"}
              time={"1 min ago"}
              type={"like"}
              checked={true}
            />

            <div className="w-full text-center">End of recent notifications.</div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <div className="p-4 sticky top-16">
          <RecentPost />
          <div className="mt-6">
            <MiniFooter />
          </div>
        </div>
      </div>
    </div>
  );
}
