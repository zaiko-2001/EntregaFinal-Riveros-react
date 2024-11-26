import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim()) {
      navigate(`/search?q=${value}`); 
    }
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Buscar productos..."
      value={query}
      onChange={handleSearch} 
      style={{ borderRadius: "2px", maxWidth: "300px" }}
    />
  );
};

export default SearchBar;
