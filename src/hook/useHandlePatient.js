import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import useModalStore from "../store/useModalStore";
import { useNavigate } from "react-router-dom";

export const useHandlePatient = () => {
  const [allDataPatient, setAllDataPatient] = useState([]);
  const [detailPatient, setDetailPatient] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { closeDeleteModal, closeAddModal, closeUpdateModal } = useModalStore();

  const getAllDataPatient = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/v1/patient", { withCredentials: true });
      const response = await res.data;
      setAllDataPatient(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  const getDetailpatient = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3000/api/v1/patient/${id}`, { withCredentials: true });
      const response = await res.data;
      setDetailPatient(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const addPatient = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await axios.post(`http://localhost:3000/api/v1/patient`, data, { withCredentials: true });
      toast.success("Berhasil Menambah Data Pasien", {
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
      setIsSubmitting(false);
      console.log(error.response.data.msg);
      const errorMsg = error.response.data.msg;
      toast.error(errorMsg, {
        autoClose: 1500,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };

  const updatePatient = async (id, data) => {
    setIsSubmitting(true);
    try {
      const res = await axios.put(`http://localhost:3000/api/v1/patient/${id}`, data, { withCredentials: true });
      toast.success("Berhasil Mengupdate Data Pasien", {
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
      setIsSubmitting(false);
      const errorMsg = error.response.data.msg;
      toast.error(errorMsg, {
        autoClose: 1500,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };

  const deletePatient = async (id) => {
    setIsSubmitting(true);
    try {
      const res = await axios.delete(`http://localhost:3000/api/v1/patient/${id}`, { withCredentials: true });
      toast.success("Berhasil Menghapus Data Pasien", {
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
      setIsSubmitting(false);
      console.log(error);
      const errorMsg = error.response.data.msg;
      toast.error(errorMsg, {
        autoClose: 1500,
        pauseOnHover: false,
        theme: "colored",
        hideProgressBar: true,
        closeOnClick: true,
      });
    }
  };

  return { allDataPatient, detailPatient, deletePatient, addPatient, getDetailpatient, updatePatient, getAllDataPatient, isLoading, isSubmitting };
};
