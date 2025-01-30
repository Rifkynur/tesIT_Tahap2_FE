import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ pageCount, handlePageClick }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=">>"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={pageCount}
      previousLabel="<<"
      containerClassName="flex gap-3 justify-center items-center mt-4"
      activeClassName="bg-black text-white rounded=lg px-2 py-1"
      pageClassName=" border-1 border-black rounded-lg px-3 py-1 cursor-pointer text-black"
    />
  );
};

export default Pagination;
