import React, { useState } from "react";
import "./upload.css";
import { Modal } from "../modal/modal";

export function UploadButton({
  setPhotos,
  photos,
  setFilterPhotos,
  showModal,
  setShowModal,
  imageName,
  setImageName,
  urlInput,
  setUrlInput,
}) {
  const [file, setFile] = useState({});

  function triggerFileInput() {
    document.getElementById("file-upload").click();
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    setImageName(file.name);
    setFile(file);

    if (file) {
      setShowModal(true);
    }
  }
  return (
    <div>
      <input
        type="file"
        id="file-upload"
        style={{ display: "none" }}
        multiple
        onChange={handleFileChange}
      />
      <button onClick={triggerFileInput}>Upload Files</button>
      {showModal && (
        <Modal
          imageName={imageName}
          setPhotos={setPhotos}
          photos={photos}
          setShowModal={setShowModal}
          file={file}
          setFilterPhotos={setFilterPhotos}
          urlInput={urlInput}
          setUrlInput={setUrlInput}
        />
      )}
    </div>
  );
}
