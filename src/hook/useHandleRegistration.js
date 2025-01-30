import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useModalStore from "../store/useModalStore";

export const useHandleRegistration = () => {
  const { closeAddModalRegistration } = useModalStore();
  const [allDataRegistration, setAllDataRegistration] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getAllRegistration = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/registration", { withCredentials: true });
      const response = await res.data;
      setAllDataRegistration(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteRegistration = async (id) => {
    setIsSubmitting(true);
    try {
      const res = await axios.delete(`http://localhost:3000/api/v1/registration/${id}`, { withCredentials: true });
      toast.success("Berhasil Mengapus Data Antrean", {
        autoClose: 1000,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
      const errorMsg = error.response.data.msg;
      toast.error(errorMsg, {
        autoClose: 1500,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
      setIsSubmitting(false);
    }
  };

  const updateStatusRegistrationCalled = async (id) => {
    setIsSubmitting(true);
    try {
      const res = await axios.put(`http://localhost:3000/api/v1/registration/called/${id}`, {}, { withCredentials: true });
      window.location.reload();
    } catch (error) {
      console.log(error);
      const errorMsg = error.response.data.msg;
      toast.error(errorMsg, {
        autoClose: 1500,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
      setIsSubmitting(false);
    }
  };

  const finishRegistration = async (id) => {
    setIsSubmitting(true);
    try {
      const res = await axios.put(`http://localhost:3000/api/v1/registration/finish/${id}`, {}, { withCredentials: true });
      toast.success("Pelayanan Pasien Selesai", {
        autoClose: 1000,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      const errorMsg = error.response.data.msg;
      toast.error(errorMsg, {
        autoClose: 1500,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
      setIsSubmitting(false);
    }
  };
  const addRegistration = async (dataId) => {
    setIsSubmitting(true);
    try {
      const res = await axios.post(`http://localhost:3000/api/v1/registration`, dataId, { withCredentials: true });
      toast.success("Berhasil Menambah Data Antrean", {
        autoClose: 1000,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      console.log(error);
      const errorMsg = error.response.data.msg;
      toast.error(errorMsg, {
        autoClose: 1500,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
      setIsSubmitting(false);
    }
  };

  return { allDataRegistration, deleteRegistration, updateStatusRegistrationCalled, getAllRegistration, addRegistration, finishRegistration, isSubmitting };
};
