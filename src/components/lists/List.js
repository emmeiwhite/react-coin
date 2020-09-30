import React, { useEffect, useState } from "react";
import { ReactComponent as Loader } from "./../common/Loader.svg";
import Table from "./Table";
import Pagination from "./Pagination";
import "./List.css";

const List = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Adding Pagination and updating the Table Data
  const handlePrevPage = (prevPage) => {
    if (prevPage === 1) {
      setPage(totalPages);
    } else {
      setPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = (nextPage) => {
    if (nextPage === totalPages) {
      setPage(1);
    } else {
      setPage((nextPage) => nextPage + 1);
    }
  };

  // Making API call to fetch data from the API EndPoint
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.udilia.com/coins/v1/cryptocurrencies?page=${page}&perPage=20`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Total Data :");
        console.log(data);

        console.log("Currencies :");
        console.log(data.currencies);

        setTotalPages(data.totalPages);
        setLists(data.currencies);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, []);
  return (
    <main>
      {loading && !error ? (
        <div style={{ textAlign: "center" }}>
          <Loader />
        </div>
      ) : !loading && error ? (
        <h2>Error ...</h2>
      ) : (
        <div>
          <Table lists={lists} />
          <Pagination
            totalPages={totalPages}
            currentPage={page}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />
        </div>
      )}
    </main>
  );
};

export default List;
