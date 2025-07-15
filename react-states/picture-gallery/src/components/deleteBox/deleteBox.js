import React from "react";
import "./deleteBox.css";
import { MdDelete } from "react-icons/md";

export function DeleteBox({ setPhotos, photos, index, setSelectedPhoto }) {
  function handleDelete() {
    setPhotos(photos.filter((_, photoIndex) => photoIndex !== index));
    setSelectedPhoto(null);
  }
  return (
    <div className="delete-box" onClick={handleDelete}>
      <MdDelete size={25} />
    </div>
  );
}
