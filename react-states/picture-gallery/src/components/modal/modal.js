import React, { useState } from "react";
import "./modal.css";

export function Modal({
  imageName,
  setPhotos,
  photos,
  setShowModal,
  file,
  setFilterPhotos,
  urlInput,
  setUrlInput,
}) {
  const [name, setName] = useState(imageName);
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [url, setUrl] = useState("");

  function handleDescritionInput(e) {
    setDescription(e.target.value);
  }

  function handleTagsInput(e) {
    setTags(e.target.value);
  }

  function handleNameInput(e) {
    setName(e.target.value);
  }
  function handleUrlInput(e) {
    setUrl(e.target.value);
  }

  function handleAdd() {
    const newPhoto = {
      src: file && file instanceof File ? URL.createObjectURL(file) : url,
      caption: description,
      tags: tags.split(","),
      name: name,
    };
    const updatedPhotos = [...photos, newPhoto];

    setPhotos(updatedPhotos);
    setFilterPhotos(updatedPhotos);
    setShowModal(false);
    setUrlInput(false);
  }
  function handleCancel() {
    setShowModal(false);
    setUrlInput(false);
  }
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add Details</h2>
        {urlInput && (
          <div className="form-group">
            <label>URL:</label>
            <input
              type="text"
              placeholder="Enter url"
              value={url}
              onChange={handleUrlInput}
            />
          </div>
        )}
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={handleNameInput}
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <input
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={handleDescritionInput}
          />
        </div>

        <div className="form-group">
          <label>Tags:</label>
          <input
            type="text"
            placeholder="Enter tags (e.g., fun, late, night)"
            value={tags}
            onChange={handleTagsInput}
          />
        </div>

        <div className="modal-buttons">
          <button className="add-btn" onClick={handleAdd}>
            Add
          </button>
          <button className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
