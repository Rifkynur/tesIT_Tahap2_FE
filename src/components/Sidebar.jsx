import React from "react";
import { NavLink } from "react-router-dom";
import { useHandleAuth } from "../hook/useHandleAuth";

const Sidebar = () => {
  const { handleLogout } = useHandleAuth();
  return (
    <aside className="bg-[#212529] min-h-screen p-4 w-[200px]">
      <ul className="text-white flex flex-col gap-4 font-medium capitalize">
        <li>
          <NavLink to={"/"}> Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/patient"}>Rekam Medis</NavLink>
        </li>
        <li>
          <NavLink to={"/registration"}>Pendaftaran</NavLink>
        </li>
        <li>
          <button onClick={handleLogout} className="cursor-pointer">
            Keluar
          </button>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
