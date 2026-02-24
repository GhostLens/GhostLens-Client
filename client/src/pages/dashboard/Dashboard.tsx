import DashboardStatusCards from "../../components/Cards/DashboardStatusCards";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-12 p-4 gap-x-4">
      <div className="col-span-4 border border-neutral-800 rounded-xl ">
        side bar
      </div>
      <div className="col-span-8 flex flex-col gap-4">
        <div className="border border-neutral-800 rounded-xl">
    {/* header */}
    <div className=""></div>
    {/* content */}
          <DashboardStatusCards />
        </div>
        <div className="border border-neutral-800 rounded-xl">
            {/* header */}
    <div className=""></div>
            {/* content */}
          <DashboardStatusCards />
        </div>
      </div>
    </div>
  );
}
