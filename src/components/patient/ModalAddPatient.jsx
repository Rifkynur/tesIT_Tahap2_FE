import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import useModalStore from "../../store/useModalStore";
import { useHandlePatient } from "../../hook/useHandlePatient";

const ModalAddPatient = () => {
  const { addPatient, isSubmitting } = useHandlePatient();
  const { isOpen, closeAddModal } = useModalStore();
  const [inputData, setInputData] = useState({
    name: "",
    nik: "",
    dateOfBirth: "",
    gender: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    addPatient(inputData);
  };
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md">
        <div className="flex justify-between items-center border-b pb-2">
          <h1 className="font-bold">Form Pendaftaran</h1>
          <FaTimes className="cursor-pointer" onClick={closeAddModal} />
        </div>
        <form onSubmit={handlesubmit}>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 py-2">
              <label className="font-semibold">Nama :</label>
              <input type="text" onChange={handleChange} name="name" placeholder="Masukan nama" className="border border-gray-500 p-1 rounded-md placeholder:text-black/50" required />
            </div>
            <div className="flex flex-col gap-2 py-2">
              <label className="font-semibold">NIK :</label>
              <input type="text" maxLength="12" onChange={handleChange} name="nik" placeholder="Masukan NIK" className="border border-gray-500 p-1 rounded-md placeholder:text-black/50" required />
            </div>
          </div>
          <div className="flex gap-2 w-full ">
            <div className="flex flex-col gap-2 py-2 w-1/2">
              <label className="font-semibold">Tanggal Lahir:</label>
              <input type="date" onChange={handleChange} name="dateOfBirth" placeholder="Masukan Tanggal Lahir" className="border border-gray-500 p-1 rounded-md placeholder:text-black/50" required />
            </div>
            <div className="flex flex-col gap-2 py-2 w-1/2">
              <label className="font-semibold">Jenis Kelamin :</label>
              <select name="gender" onChange={handleChange} className="border border-gray-500 p-1 rounded-md placeholder:text-black/50" required>
                <option disabled selected className="text-black/50">
                  Pilih jenis kelamin
                </option>
                <option value="male">Laki-Laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <label className="font-semibold">Alamat :</label>
            <textarea name="address" onChange={handleChange} placeholder="Masukan Alamat" className="border border-gray-500 p-1 rounded-md placeholder:text-black/50" required></textarea>
          </div>
          <div className="flex justify-between items-center mt-2">
            <button disabled={isSubmitting} className="bg-red-500 px-3 py-2 rounded-md font-semibold cursor-pointer disabled:bg-red-200" type="button" onClick={closeAddModal}>
              Batal
            </button>
            <button disabled={isSubmitting} className="bg-blue-500 px-3 py-2 rounded-md font-semibold cursor-pointer disabled:bg-blue-200" type="submit">
              Kirim
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddPatient;
