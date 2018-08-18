import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

const Coworks = props => {
  return (
    <div className="title">
      <h1>React Router demo</h1>
      <Link to="/">
        <button>Show the List</button>
      </Link>
    </div>
  );
};

Coworks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Coworks;
