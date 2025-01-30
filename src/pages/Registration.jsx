import React, { useEffect } from "react";
import TableRegistration from "../components/registration/TableRegistration";
import { useHandleRegistration } from "../hook/usehandleRegistration";
import ModalDeleteRegistration from "../components/registration/ModalDeleteRegistration";
import useModalStore from "../store/useModalStore";
import ModalAddRegistration from "../components/registration/ModalAddRegistration";
import { ToastContainer } from "react-toastify";

const Registration = () => {
  const { allDataRegistration, getAllRegistration } = useHandleRegistration();
  const { modalDeleteRegistrationIsOpen, modalAddRegistrationIsOpen, openAddModalRegistration } = useModalStore();

  useEffect(() => {
    getAllRegistration();
  }, []);
  return (
    <section className="p-4 w-full">
      <ToastContainer />
      {modalDeleteRegistrationIsOpen && <ModalDeleteRegistration />}
      {modalAddRegistrationIsOpen && <ModalAddRegistration />}
      <button onClick={openAddModalRegistration} className="px-3 py-2 bg-blue-500 rounded-md cursor-pointer font-bold text-white">
        Tambah Antrean
      </button>
      <TableRegistration data={allDataRegistration} />
    </section>
  );
};

export default Registration;
