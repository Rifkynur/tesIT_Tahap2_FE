import React, { useEffect, useState } from "react";
import { useFormattedDate } from "../../utils/utils.js";
import { FaPen, FaTrashAlt } from "react-icons/fa";
import ModalDeletePatient from "./ModalDeletePatient.jsx";
import ModalUpdatePatient from "./ModalUpdatePatient.jsx";
import useModalStore from "../../store/useModalStore.js";
import Pagination from "../Pagination";

const TablePastient = ({ data }) => {
  const { openDeleteModal, modalDeletePatientIsOpen, modalUpdatePatientIsOpen, openUpdateModal } = useModalStore();

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
    <>
      {modalDeletePatientIsOpen && <ModalDeletePatient />}
      {modalUpdatePatientIsOpen && <ModalUpdatePatient />}
      <table className="table-auto w-full mt-6 ">
        <thead className="bg-black/30">
          <tr>
            <th className="p-2">No</th>
            <th>Nama Pasien</th>
            <th>Tanggal Lahir</th>
            <th>Jenis Kelamin</th>
            <th>NIK</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.length < 1 ? (
            <tr>
              <td colSpan="7" className="text-center p-4">
                Tidak Ada Pasien
              </td>
            </tr>
          ) : (
            currentItems.map((item, index) => {
              return (
                <tr key={item.id} className="odd:bg-black/10 even:bg-black/20">
                  <td className="p-2">{index + 1}</td>
                  <td className="capitalize">{item.name}</td>
                  <td>{useFormattedDate(item.dateOfBirth)}</td>
                  <td>{item.gender === "male" ? "Laki-laki" : "Perempuan"}</td>
                  <td>{item.nik}</td>
                  <td>{item.address}</td>
                  <td className="flex items-center gap-2 justify-center">
                    <div className="bg-yellow-500 p-2 rounded-md cursor-pointer" onClick={() => openUpdateModal(item?.id)}>
                      <FaPen />
                    </div>
                    <div className="bg-red-500 p-2 rounded-md cursor-pointer" onClick={() => openDeleteModal(item?.id)}>
                      <FaTrashAlt />
                    </div>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
      {data.length > 0 && <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />}
    </>
  );
};

export default TablePastient;
