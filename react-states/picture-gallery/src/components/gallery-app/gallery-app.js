import { useState } from "react";
import photosData from "../../data/photos.json";
import "./gallery-app.css";
import { Header } from "../header/header";
import { PreviewModal } from "../previewModal/previewModal";

export function GalleryApp() {
  const [photos, setPhotos] = useState(photosData);
  const [filterPhotos, setFilterPhotos] = useState(photosData);
  const [showModal, setShowModal] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [index, setIndex] = useState(null);
  const [previewPhoto, setPreviewPhoto] = useState("");
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [isList, setIsList] = useState(false);
  const [isGrid, setIsGrid] = useState(true);

  function handleSelect(index) {
    setSelectedPhoto(index);
    setIndex(index);
  }

  function handlePreview(photo) {
    setPreviewPhoto(photo);
    setShowPreviewModal(true);
  }

  return (
    <div>
      <Header
        setPhotos={setPhotos}
        photos={photos}
        filterPhotos={filterPhotos}
        setFilterPhotos={setFilterPhotos}
        showModal={showModal}
        setShowModal={setShowModal}
        index={index}
        setSelectedPhoto={setSelectedPhoto}
        isGrid={isGrid}
        isList={isList}
        setIsGrid={setIsGrid}
        setIsList={setIsList}
      />
      {isGrid && (
        <div id="gallery-app">
          {photos.map((photo, index) => {
            const { src, name, caption } = photo;
            const getIndex = index;

            return (
              <div
                key={index}
                className="photo-box"
                onClick={() => handleSelect(index)}
                onDoubleClick={() => handlePreview(photo)}
              >
                <img
                  src={src}
                  alt={name}
                  style={
                    selectedPhoto === getIndex
                      ? { outline: "3px solid blue" }
                      : {}
                  }
                />
                <div className="pic-name">{name}</div>
              </div>
            );
          })}
        </div>
      )}
      {isList && (
        <div id="gallery-app-list">
          {photos.map((photo, indx) => {
            const { src, name, caption } = photo;
            const getIndex = indx;
            return (
              <div
                key={indx}
                className="photo-list-item"
                onClick={() => handleSelect(indx)}
                onDoubleClick={() => handlePreview(photo)}
                style={
                  selectedPhoto === getIndex
                    ? { outline: "3px solid blue" }
                    : {}
                }
              >
                <img src={src} alt={name} className="photo-avatar" />
                <div className="photo-details">
                  <div className="photo-name">{name}</div>
                  <div className="photo-caption">{caption}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      {showPreviewModal && (
        <PreviewModal
          previewPhoto={previewPhoto}
          setShowPreviewModal={setShowPreviewModal}
        />
      )}
    </div>
  );
}
