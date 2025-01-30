import React, { useEffect } from "react";
import { GoAlert } from "react-icons/go";
import useModalStore from "../../store/useModalStore";
import { useHandleRegistration } from "../../hook/usehandleRegistration";

const ModalDeleteRegistration = () => {
  const { deleteRegistration, isSubmitting } = useHandleRegistration();
  const { closeDeleteModalRegistration, registrationId } = useModalStore();
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md text-black">
        <div className="bg-red-400 rounded-md p-3 w-16 mx-auto">
          <GoAlert size={40} />
        </div>
        <div className=" my-2">
          <h1 className="text-center font-bold my-2">Apa anda yakin?</h1>
          <p className="max-w-[300px] text-center text-sm text-black/80">Data yang anda pilih akan dihapus secara permanen</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 px-3 py-2 rounded-md font-semibold cursor-pointer" disabled={isSubmitting} onClick={closeDeleteModalRegistration}>
            Batal
          </button>
          <button
            className="bg-red-500 px-3 py-2 rounded-md font-semibold cursor-pointer"
            disabled={isSubmitting}
            onClick={() => {
              deleteRegistration(registrationId);
            }}
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDeleteRegistration;
