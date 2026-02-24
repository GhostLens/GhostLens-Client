import { Outlet } from "react-router";

export default function MainLayout() {
 
  return (
    <div className="min-h-[100vh] top-0 left-0 w-full bg-neutral-900 text-neutral-100">
      <Outlet />
    </div>
  );
}
