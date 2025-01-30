import React, { useEffect, useState } from "react";
import { useFormattedDate } from "../../utils/utils";
import Pagination from "../Pagination";

const TableHistoryRegistration = ({ data }) => {
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
      <div className="flex justify-between items-center">
        <p className="font-bold">Daftar Pelayanan Bulan Ini</p>
      </div>
      <table className="table-auto w-full mt-6 ">
        <thead className="bg-black/40">
          <tr>
            <th className="p-2">No</th>
            <th>Nama Pasien</th>
            <th>NIK</th>
            <th>Tanggal Periksa</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {data.length < 1 ? (
            <tr>
              <td colSpan="7" className="text-center p-4">
                Tidak Ada Data
              </td>
            </tr>
          ) : (
            currentItems.map((item, index) => {
              return (
                <tr key={item.id} className="odd:bg-black/10 even:bg-black/20">
                  <td className="p-3">{index + 1}</td>
                  <td>{item.patient.name}</td>
                  <td>{item.patient.nik}</td>
                  <td>{useFormattedDate(item.createdAt)}</td>
                  <td>{item.patient.gender === "male" ? "Laki-laki" : "Pertemuan"}</td>
                  <td>{item.patient.address}</td>
                  <td className="px-2">
                    <p className="bg-red-500 rounded-md text-black font-bold capitalize">Selesai</p>
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

export default TableHistoryRegistration;
