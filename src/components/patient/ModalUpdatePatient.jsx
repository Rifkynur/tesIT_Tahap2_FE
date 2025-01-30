import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import useModalStore from "../../store/useModalStore";
import { useHandlePatient } from "../../hook/useHandlePatient";

const ModalUpdatePatient = () => {
  const { getDetailpatient, updatePatient, detailPatient, isSubmitting } = useHandlePatient();
  const { closeUpdateModal, patientId } = useModalStore();
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
    updatePatient(patientId, inputData);
  };
  useEffect(() => {
    getDetailpatient(patientId);
  }, []);

  useEffect(() => {
    if (detailPatient) {
      setInputData({
        name: detailPatient.name || "",
        nik: detailPatient.nik || "",
        dateOfBirth: detailPatient.dateOfBirth ? new Date(detailPatient.dateOfBirth).toISOString().split("T")[0] : "",
        gender: detailPatient.gender || "",
        address: detailPatient.address || "",
      });
    }
  }, [detailPatient]);
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md text-black">
        <div className="flex justify-between items-center border-b pb-2">
          <h1 className="font-bold">Form Edit Pasien</h1>
          <FaTimes className="cursor-pointer" onClick={closeUpdateModal} />
        </div>
        <form onSubmit={handlesubmit}>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 py-2">
              <label className="font-semibold">Nama :</label>
              <input type="text" onChange={handleChange} name="name" placeholder="Masukan nama" className="border border-gray-500 px-2 py-1 rounded-md placeholder:text-black/50 " value={inputData.name} required />
            </div>
            <div className="flex flex-col gap-2 py-2">
              <label className="font-semibold">NIK :</label>
              <input type="text" maxLength="12" onChange={handleChange} name="nik" placeholder="Masukan NIK" className="border border-gray-500 px-2 py-1 rounded-md placeholder:text-black/50" value={inputData.nik} required />
            </div>
          </div>
          <div className="flex gap-2 w-full ">
            <div className="flex flex-col gap-2 py-2 w-1/2">
              <label className="font-semibold">Tanggal Lahir:</label>
              <input type="date" onChange={handleChange} name="dateOfBirth" placeholder="Masukan Tanggal Lahir" className="border border-gray-500 px-2 py-1 rounded-md placeholder:text-black/50" required value={inputData.dateOfBirth} />
            </div>
            <div className="flex flex-col gap-2 py-2 w-1/2">
              <label className="font-semibold">Jenis Kelamin :</label>
              <select name="gender" onChange={handleChange} className="border border-gray-500 px-2 py-1 rounded-md placeholder:text-black/50" required value={detailPatient.gender}>
                <option disabled className="text-black/50">
                  Pilih jenis kelamin
                </option>
                <option value="male">Laki-Laki</option>
                <option value="female">Perempuan</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <label className="font-semibold">Alamat :</label>
            <textarea name="address" onChange={handleChange} placeholder="Masukan Alamat" className="border border-gray-500 px-2 py-1 rounded-md placeholder:text-black/50" required value={inputData.address}></textarea>
          </div>
          <div className="flex justify-between items-center mt-2">
            <button disabled={isSubmitting} className="bg-red-500 px-3 py-2 rounded-md font-semibold cursor-pointer disabled:bg-red-200" type="button" onClick={closeUpdateModal}>
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

export default ModalUpdatePatient;
