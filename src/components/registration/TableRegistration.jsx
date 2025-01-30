import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import useModalStore from "../../store/useModalStore";
import ModalDeleteRegistration from "./ModalDeleteRegistration";
import { useHandleRegistration } from "../../hook/usehandleRegistration";
import Pagination from "../Pagination";

const TableRegistration = ({ data }) => {
  const { updateStatusRegistrationCalled, finishRegistration, isSubmitting } = useHandleRegistration();
  const { openDeleteModalRegistration, modalDeleteRegistrationIsOpen } = useModalStore();

  const itemsPerPage = 5;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  React.useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  return (
    <div className="w-full bg-[#fff] mt-5 rounded-md p-8 text-black shadow-lg">
      {modalDeleteRegistrationIsOpen && <ModalDeleteRegistration />}
      <div className="flex justify-between items-center">
        <p className="font-bold">Daftar Antrean</p>
      </div>
      <table className="table-auto w-full mt-6 ">
        <thead className="bg-black/40">
          <tr>
            <th className="p-2">No</th>
            <th>Nama Pasien</th>
            <th>No Antrean</th>
            <th>NIK</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.length < 1 ? (
            <tr>
              <td colSpan="8" className="text-center p-4">
                Tidak Ada Antrean
              </td>
            </tr>
          ) : (
            currentItems.map((item, index) => {
              return (
                <tr key={item.id} className="odd:bg-black/20 even:bg-black/30">
                  <td className="p-3">{index + 1}</td>
                  <td>{item.patient.name}</td>
                  <td>{item.registration_number}</td>
                  <td>{item.patient.nik}</td>
                  <td>{item.patient.gender === "male" ? "Laki-laki" : "Pertemuan"}</td>
                  <td>{item.patient.address}</td>
                  <td>
                    <p className={`${item.status === "queue" ? "bg-blue-200 " : "bg-green-300"} rounded-md text-black font-bold capitalize`}>{item.status === "queue" ? "antre" : "dilayani"}</p>
                  </td>
                  <td className="flex items-center justify-center gap-2">
                    <button disabled={isSubmitting} className="p-3 bg-blue-500 cursor-pointer rounded-md disabled:bg-blue-200" onClick={() => updateStatusRegistrationCalled(item.id)}>
                      <HiOutlineSpeakerphone size={18} />
                    </button>
                    <button disabled={isSubmitting} className="p-3 bg-green-500 cursor-pointer rounded-md disabled:bg-green-200" onClick={() => finishRegistration(item.id)}>
                      <FaCheck size={18} />
                    </button>
                    <button disabled={isSubmitting} className="p-3 bg-red-500 cursor-pointer rounded-md disabled:bg-red-200" onClick={() => openDeleteModalRegistration(item.id)}>
                      <FaTrashAlt size={18} />
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {data.length > 0 && <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />}
    </div>
  );
};

export default TableRegistration;
