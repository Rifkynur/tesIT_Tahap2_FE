import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";
import { toast } from "react-toastify";

export const useHandleAuth = () => {
  const { login, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogin = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/login", data, { withCredentials: true });
      const response = await res.data;

      login(response.dataAdmin.name);
    } catch (error) {
      console.log(error);
      const errorMsg = error.response.data.msg;
      toast.error(errorMsg, {
        autoClose: 1000,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };
  const handleRegister = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/register", data, { withCredentials: true });
      const response = await res.data;
      toast.success("Berhasil Membuat Akun", {
        autoClose: 1000,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (error) {
      console.log(error);
      const errorMsg = error.response.data.msg;
      toast.error(errorMsg, {
        autoClose: 1000,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };

  const handleLogout = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/logout", { withCredentials: true });
      logout();
    } catch (error) {
      console.log(error);
    }
  };

  return { handleLogin, handleLogout, handleRegister };
};
