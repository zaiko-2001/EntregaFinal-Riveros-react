import React from "react";

const AddItemButton = ({ onAdd }) => {
  return (
    <button className="btn btn-carrito" onClick={onAdd}>
      <i className="bi bi-cart icon"></i>
    </button>
  );
};

export default AddItemButton;
