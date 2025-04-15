import React from "react";
import "./previewModal.css";
import { ImCancelCircle } from "react-icons/im";

export function PreviewModal({ previewPhoto, setShowPreviewModal }) {
  const { src, name, caption, tags } = previewPhoto;

  function handlePreviewCancel() {
    setShowPreviewModal(false);
  }

  function handleDownload() {
    setShowPreviewModal(false);
  }
  return (
    <div className="modal-preview-overlay">
      <div className="preview-modal-content">
        <div className="picture-box">
          <img src={src} alt={name} className="preview-img" />
        </div>
        <div className="detail-box">
          <div className="cancel">
            <ImCancelCircle
              size={30}
              onClick={handlePreviewCancel}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div>
            <b>Name</b> : {name}
          </div>
          <div>
            <b>Description</b> : {caption}
          </div>
          <div>
            <b>Tags</b> : {tags}
          </div>
          <a href={src} download={name || "image.jpg"} className="link">
            <button className="download" onClick={handleDownload}>
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
