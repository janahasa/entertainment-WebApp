import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ handlePageClick, pageCount, className }) => {
  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        className={className}
        breakLabel="..."
        nextLabel=" >>"
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="pagination-active"
      />
    </div>
  );
};

export default Pagination;
