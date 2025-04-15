import React from "react";
import "./importBox.css";
import { PiNetworkFill } from "react-icons/pi";

export function ImportButton({ setShowModal, setImageName, setUrlInput }) {
  function handleShowImportModal() {
    setShowModal(true);
    setImageName("");
    setUrlInput(true);
  }
  return (
    <div className="import-button" onClick={handleShowImportModal}>
      <div className="import-icon">
        <PiNetworkFill size={30} />
      </div>
      <div className="import-text">Import from Unsplash</div>
    </div>
  );
}
