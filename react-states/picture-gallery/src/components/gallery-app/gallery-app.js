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
      />
      <div id="gallery-app">
        {photos.map((photo, index) => {
          const { src, name } = photo;
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
        {showPreviewModal && (
          <PreviewModal
            previewPhoto={previewPhoto}
            setShowPreviewModal={setShowPreviewModal}
          />
        )}
      </div>
    </div>
  );
}
