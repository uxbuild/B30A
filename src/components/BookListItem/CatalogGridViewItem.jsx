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

export default function CatalogGridViewItem({
  num,
  id,
  title,
  author,
  available,
  book,
  image,
}) {

  const navigate = useNavigate();

  function onGridItemClick(e){
    e.preventDefault();
    console.log('GRID ITEM click');
    navigate(`/books/${book.id}`);  
  }
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
          image={image} // Replace with your image URL
        />
        <CardContent>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={onGridItemClick}>Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
