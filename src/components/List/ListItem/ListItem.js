import React from "react";
import PropTypes from "prop-types";

const ListItem = ({ id, name, getId }) => {
  return (
    <li
      style={{ cursor: "pointer" }}
      className="list-group-item"
      onClick={() => getId(id)}
    >
      {name}
    </li>
  );
};

ListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  getId: PropTypes.func.isRequired,
};

export default ListItem;
