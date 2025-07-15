import React, { useState } from "react";
import "./header.css";
import { InputBox } from "../input/input";
import { CheckBox } from "../checkBox/checkBox";
import { DeleteBox } from "../deleteBox/deleteBox";
import { GridSwitchBox } from "../gridSwitchBox/gridSwitchBox";
import { ImportButton } from "../importBox/importBox";
import { UploadButton } from "../upload/upload";

export function Header({
  setPhotos,
  photos,
  filterPhotos,
  setFilterPhotos,
  showModal,
  setShowModal,
  index,
  setSelectedPhoto,
  isList,
  isGrid,
  setIsList,
  setIsGrid,
}) {
  const [imageName, setImageName] = useState("");
  const [urlInput, setUrlInput] = useState(false);
  const [allowTagsInput, setAllowTagsInput] = useState(false);
  return (
    <div className="header">
      <InputBox
        setPhotos={setPhotos}
        filterPhotos={filterPhotos}
        allowTagsInput={allowTagsInput}
      />
      <CheckBox setAllowTagsInput={setAllowTagsInput} />
      <DeleteBox
        setPhotos={setPhotos}
        photos={photos}
        index={index}
        setSelectedPhoto={setSelectedPhoto}
      />
      <GridSwitchBox
        isGrid={isGrid}
        isList={isList}
        setIsGrid={setIsGrid}
        setIsList={setIsList}
      />
      <ImportButton
        setShowModal={setShowModal}
        setImageName={setImageName}
        setUrlInput={setUrlInput}
      />
      <UploadButton
        setPhotos={setPhotos}
        photos={photos}
        setFilterPhotos={setFilterPhotos}
        showModal={showModal}
        setShowModal={setShowModal}
        imageName={imageName}
        setImageName={setImageName}
        urlInput={urlInput}
        setUrlInput={setUrlInput}
      />
    </div>
  );
}
