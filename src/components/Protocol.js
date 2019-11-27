import React from "react";
import PropTypes from "prop-types";

function Protocol({ itemName, itemCount, itemDueDate, itemNote }) {
  return (
    <div>
      {itemName}: {itemCount} fällig am {itemDueDate}
      <p>{itemNote}</p>
    </div>
  );
}

Protocol.propTypes = {
  itemName: PropTypes.string,
  itemCount: PropTypes.number,
  itemDueDate: PropTypes.string,
  itemNote: PropTypes.string
};
export default Protocol;
