import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash, FaUser, FaKey } from "react-icons/fa";
import { useHandleAuth } from "../hook/useHandleAuth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { ToastContainer } from "react-toastify";

const Register = () => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [inputData, setInputData] = useState({
    code: "",
    name: "",
    password: "",
  });

  const { handleRegister } = useHandleAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputData({ ...inputData, [name]: value });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    handleRegister(inputData);
  };
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  return (
    <section className="w-full h-screen flex justify-center items-center">
      <ToastContainer />
      <div className="p-5 rounded-md shadow-md bg-slate-50 min-w-[300px]">
        <form onSubmit={handlesubmit}>
          <h1 className="pb-4 font-bold uppercase text-center">Register Form</h1>
          <div className="flex flex-col gap-5">
            <div className="border-1 border-gray-500 p-2 rounded-md flex items-center gap-3">
              <FaKey />
              <input onChange={handleChange} name="code" type="text" placeholder="Kode Petugas" className=" focus:outline-none" required />
            </div>
            <div className="border-1 border-gray-500 p-2 rounded-md flex items-center gap-3">
              <FaUser />
              <input onChange={handleChange} name="name" type="text" placeholder="Nama Petugas" className=" focus:outline-none" />
            </div>
            <div className="border-1 border-gray-500 p-2 rounded-md flex items-center gap-3">
              {showPassword ? <FaEye onClick={() => setShowPassword((prev) => !prev)} className="cursor-pointer" /> : <FaEyeSlash onClick={() => setShowPassword((prev) => !prev)} className="cursor-pointer" />}
              <input onChange={handleChange} name="password" type={showPassword ? "text" : "password"} placeholder="Password" className=" focus:outline-none" required />
            </div>
            <button className="bg-blue-500 py-2 font-semibold rounded-md cursor-pointer text-white" type="submit">
              Register
            </button>
            <p className="text-center text-sm">
              Sudah Punya Akun ?{" "}
              <Link to={"/login"} className="text-blue-500 font-bold">
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
