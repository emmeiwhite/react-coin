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
      <button
        className="pagination-button"
        onClick={() => handlePrevPage(currentPage)}
      >
        &larr;
      </button>

      <span className="pagination-page-info">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="pagination-button"
        onClick={() => handleNextPage(currentPage)}
      >
        &rarr;
      </button>
    </div>
  );
};

export default Pagination;
