import "./gallery-app.css";

export function GalleryApp({ photos }) {
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
