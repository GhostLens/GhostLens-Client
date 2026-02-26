import { Outlet } from "react-router";
import AddApikeyModal from "../components/Modals/AddApikeyModal";
import DeleteModal from "../components/Modals/DeleteModal";
import SelectAccountModal from "../components/Modals/SelectAccountModal";

export default function MainLayout() {
  return (
    <div className="min-h-[100vh] top-0 left-0 w-full bg-neutral-900 text-neutral-100">
      <AddApikeyModal />
      <DeleteModal />
      <SelectAccountModal />
      <Outlet />
    </div>
  );
}
