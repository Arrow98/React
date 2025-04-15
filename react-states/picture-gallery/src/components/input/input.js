import React from "react";
import "./input.css";
import { IoSearchSharp } from "react-icons/io5";

export function InputBox({ setPhotos, filterPhotos }) {
  function handleSearch(e) {
    const inputValue = e.target.value;
    const updatedFilteredPhotos =
      inputValue === ""
        ? filterPhotos
        : filterPhotos.filter(
            (photo) =>
              photo.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
              photo.caption
                .toLowerCase()
                .includes(e.target.value.toLowerCase()) ||
              photo.tags.some(
                (tag) => tag.toLowerCase() === e.target.value.toLowerCase()
              )
          );
    setPhotos(updatedFilteredPhotos);
  }
  return (
    <div className="input-box">
      <div className="search-icon">
        <IoSearchSharp size={35} />
      </div>
      <input
        type="text"
        className="input"
        placeholder="Search"
        onChange={handleSearch}
      />
    </div>
  );
}
