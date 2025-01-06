import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CatalogGridViewItem({
  num,
  book,
}) {
  const navigate = useNavigate();

  function onGridItemClick(e) {
    e.preventDefault();
    console.log("GRID ITEM click");
    navigate(`/books/${book.id}`);
  }

  const [imgSrc, setImgSrc] = useState(book.coverimage);
  // Placeholder image URL
  const placeholderImage = "https://via.placeholder.com/200";

  // Handle error in loading image and set the placeholder
  const handleImageError = () => {
    console.log('handle image error..');
    
    setImgSrc(placeholderImage);
  };

  return (
    // <p>{num+1}. {title}</p>
    <div className="grid-view-item-container grid-view-card">
     <img className="grid-view-card-item grid-view-card-image" src={imgSrc} alt="placeholder image" onError={handleImageError} />
     <p className="grid-view-card-item grid-view-card-title">{book.title}</p>
     <p className="grid-view-card-item grid-view-card-author">{book.author}</p>
     <a className="grid-view-card-item grid-view-card-link" onClick={onGridItemClick}>More info..</a>
    </div>
  );
}
