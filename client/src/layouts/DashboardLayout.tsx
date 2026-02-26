import { Outlet } from "react-router";
import DashboardNavbar from "../components/Navbar/DashboardNavbar";

export default function DashboardLayout() {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <DashboardNavbar />
      <Outlet />
    </div>
  );
}
