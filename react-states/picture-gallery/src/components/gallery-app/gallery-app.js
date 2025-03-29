import { useState } from "react";
import photosData from "./data/photos.json";
import "./gallery-app.css";

export function GalleryApp() {
  const [photos, setPhotos] = useState(photosData);

  /* Remove sample code and start project */
  return (
    <div id="gallery-app">
      {photos.map(({ src, name }) => (
        <div>
          <img src={src} alt={name} key={src + name} />
        </div>
      ))}
    </div>
  );
}
