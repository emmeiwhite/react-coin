import React from "react";
import { withRouter } from "react-router-dom";
import "./Detail.css";

const Detail = ({ id, match, location, history }) => {
  return (
    <div>
      <h1>Detail Page</h1>
      <p>Query Parameter being passed is:{match.params.currencyId}</p>
    </div>
  );
};

export default withRouter(Detail);
