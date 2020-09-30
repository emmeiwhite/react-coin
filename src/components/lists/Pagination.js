import React from "react";
import "./Pagination.css";

const Pagination = ({
  currentPage,
  totalPages,
  handlePrevPage,
  handleNextPage,
}) => {
  return (
    <div className="pagination-button-wrapper">
      <button className="pagination-button">&larr;</button>
      <span className="pagination-page-info">
        Page {currentPage} of {totalPages}
      </span>
      <button className="pagination-button">&rarr;</button>
    </div>
  );
};

export default Pagination;
