import React, { useEffect, useState } from "react";
import TablePastient from "../components/patient/TablePastient";
import { useHandlePatient } from "../hook/useHandlePatient";
import useModalStore from "../store/useModalStore";
import ModalAddPatient from "../components/patient/ModalAddPatient";
import { ToastContainer } from "react-toastify";

const Patient = () => {
  const { openAddModal, modalAddPatientIsOpen } = useModalStore();
  const { allDataPatient, getAllDataPatient, isLoading } = useHandlePatient();

  useEffect(() => {
    getAllDataPatient();
    console.log("bisaa");
  }, [isLoading]);
  return (
    <section className="p-4 w-full">
      <ToastContainer />
      {modalAddPatientIsOpen && <ModalAddPatient />}
      <button className="px-3 py-2 bg-blue-500 rounded-md cursor-pointer font-bold text-white" onClick={openAddModal}>
        Tambah pasien
      </button>
      <div className="w-full bg-[#fff] mt-5 rounded-md p-8 text-black shadow-lg">
        <div className="flex justify-between items-center">
          <p className="font-bold">Daftar Rekam Medis</p>
        </div>
        {isLoading ? <p>Loading..</p> : <TablePastient data={allDataPatient} />}
      </div>
    </section>
  );
};

export default Patient;
