import React from "react";
import useAuthStore from "../store/useAuthStore";

const Navbar = () => {
  const { user } = useAuthStore();
  return (
    <nav className="flex justify-between items-center p-3 bg-[#1F1F1F] w-full text-white poppins relative">
      <h1 className="font-semibold">Pelayanan Pasien</h1>
      <div>
        <h2 className="font-bold">{user}</h2>
      </div>
    </nav>
  );
};

export default Navbar;
