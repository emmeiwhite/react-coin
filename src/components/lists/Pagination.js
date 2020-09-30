import React from "react";
import "./Pagination.css";
import PropTypes from "prop-types";

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
        disabled={currentPage === 1}
      >
        &larr;
      </button>

      <span className="pagination-page-info">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className="pagination-button"
        onClick={() => handleNextPage(currentPage)}
        disabled={currentPage === totalPages}
      >
        &rarr;
      </button>
    </div>
  );
};

// PropType Validations
Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
};

export default Pagination;
