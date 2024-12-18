import React from "react";

const ItemQuantitySelector = ({ quantity, increment, decrement }) => {
  return (
    <div className="quantity-selector d-flex align-items-center mb-3">
      <button className="btn btn-sr" onClick={decrement}>
        <i className="bi bi-dash-circle"></i>
      </button>
      <span
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          width: "30px",
          textAlign: "center",
        }}
      >
        {quantity}
      </span>
      <button className="btn btn-sr" onClick={increment}>
        <i className="bi bi-plus-circle"></i>
      </button>
    </div>
  );
};

export default ItemQuantitySelector;
