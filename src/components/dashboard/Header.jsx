import React from "react";
import useModalStore from "../../store/useModalStore";
import useAuthStore from "../../store/useAuthStore";
const Header = () => {
  const user = useAuthStore((state) => state.user);
  const { openModal } = useModalStore();

  return (
    <div className="flex items-center justify-between w-full bg-[#fff] p-8 text-black rounded-lg shadow-lg">
      <div>
        <h1 className="font-semibold text-xl capitalize">Selamat Datang, {user} </h1>
        <p className="text-black/60 mt-2 capitalize">Selamat bertugas, silahkan berkerja dengan semangat</p>
      </div>
    </div>
  );
};

export default Header;
