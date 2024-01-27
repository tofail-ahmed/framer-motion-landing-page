import { cn } from "@/lib/utils";
import { LayoutDashboard } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-green-600 col-span-2 h-screen sticky top-0 left-0 overflow-auto ">
      <nav className="flex flex-col gap-4 mt-4 mx-2">
            <NavLink to="/admin/dashboard" className={({isActive})=>cn("p-3 bg-gray-400 rounded-md   transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})}>
              <LayoutDashboard className="shrink-0"/>
              <span className="truncate">DashBoard</span></NavLink>
            <NavLink to="/admin/addservice" className={({isActive})=>cn("p-3 bg-gray-400 rounded-md   transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})}>
              <LayoutDashboard className="shrink-0"/>
              <span className="truncate">Add Service</span></NavLink>
            <NavLink to="/admin/servicelist" className={({isActive})=>cn("p-3 bg-gray-400 rounded-md   transition-all flex items-center gap-2",{"bg-gray-800 text-white":isActive})}>
              <LayoutDashboard className="shrink-0"/>
              <span className="truncate">Service List</span></NavLink>
         
      </nav>
    </div>
  );
};

export default Sidebar;
