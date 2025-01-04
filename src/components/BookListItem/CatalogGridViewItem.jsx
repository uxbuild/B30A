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

export default function CatalogGridViewItem({
  num,
  id,
  title,
  author,
  available,
  book,
}) {
  return (
    // <p>{num+1}. {title}</p>
    <div>
      {/* <Card sx={{ minWidth: 275 }}> */}
      <Card sx={{ width: 200 }}>
        <CardMedia
          component="img"
          alt="Example Image"
          height="140" // Adjust the height of the image
          image="https://via.placeholder.com/150" // Replace with your image URL
        />
        <CardContent>
          <Typography variant="body1">Title: {title}</Typography>
          <Typography variant="body2" color="text.secondary">
            {author}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
