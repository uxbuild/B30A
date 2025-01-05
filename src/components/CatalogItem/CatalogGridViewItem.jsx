import React from "react";
import ReactDOM from "react-dom/client";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CatalogGridViewItem({
  num,
  // id,
  // title,
  // author,
  // available,
  book,
  // image,
}) {
  const navigate = useNavigate();

  function onGridItemClick(e) {
    e.preventDefault();
    console.log("GRID ITEM click");
    navigate(`/books/${book.id}`);
  }

  const [imgSrc, setImgSrc] = useState(book.coverimage);
  // Placeholder image URL
  const placeholderImage = "https://via.placeholder.com/150";

  // Handle error in loading image and set the placeholder
  const handleImageError = () => {
    setImgSrc(placeholderImage);
  };

  return (
    // <p>{num+1}. {title}</p>
    <div className="grid-view-item-container">
      {/* <Card sx={{ minWidth: 275 }}> */}
      <Card sx={{ width: 200 }}>
        <CardMedia
          component="img"
          alt="Example Image"
          // height="140" // Adjust the height of the image

          width="100%"
          // image={image} // Replace with your image URL
          image={imgSrc}
          onError={handleImageError} // Trigger on error (failed to load)
        />
        <CardContent>
          <Typography variant="body1">{book.title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {book.author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onGridItemClick}>
            Click for details
          </Button>
        </CardActions>
        {/* Color Bar */}
        {book.available ? (
          <CardActions
            sx={{ p: 0, display: "flex" }}
            className="card-label-container-available"
          >
            <Typography variant="body2" className="card-availability-label">
              Available
            </Typography>
          </CardActions>
        ) : (
          <CardActions
            sx={{ p: 0, display: "flex" }}
            className="card-label-container-reserved"
          >
            <Typography variant="body2" className="card-availability-label">
              Checked Out
            </Typography>
          </CardActions>
        )}
      </Card>
    </div>
  );
}
