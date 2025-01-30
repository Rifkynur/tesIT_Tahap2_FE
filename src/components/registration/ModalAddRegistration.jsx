import React, { useEffect, useState } from "react";
import useModalStore from "../../store/useModalStore";
import { FaTimes } from "react-icons/fa";
import { useHandlePatient } from "../../hook/useHandlePatient";
import { useHandleRegistration } from "../../hook/usehandleRegistration";

const ModalAddRegistration = () => {
  const { getAllDataPatient, allDataPatient, isSubmitting } = useHandlePatient();
  const { closeAddModalRegistration } = useModalStore();
  const { addRegistration } = useHandleRegistration();

  const [inputData, setInputData] = useState({
    patient_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    console.log(inputData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRegistration(inputData);
  };
  useEffect(() => {
    getAllDataPatient();
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md max-w-md w-full">
        <div className="flex justify-between items-center border-b pb-2">
          <h1 className="font-bold">Form Pendaftaran</h1>
          <FaTimes className="cursor-pointer" onClick={closeAddModalRegistration} />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 py-2">
            <label className="font-semibold">Pilih Pasien :</label>
            <select name="patient_id" className="border border-gray-500 p-1 rounded-md placeholder:text-black/50" required defaultValue="" onChange={handleChange}>
              <option disabled selected className="text-black/50">
                Pilih Pasien
              </option>
              {allDataPatient.map((item) => {
                return (
                  <option value={item.id} key={item.id} className="capitalize">
                    {item.name} ({item.nik})
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-between items-center mt-2">
            <button disabled={isSubmitting} className="bg-red-500 px-3 py-2 rounded-md font-semibold cursor-pointer disabled:bg-red-200" type="button" onClick={closeAddModalRegistration}>
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

export default ModalAddRegistration;
