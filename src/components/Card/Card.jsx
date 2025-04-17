import React from "react";
import { Card as MUICard, CardContent, CardMedia, Typography, Button } from "@mui/material";

const Card = ({ title, description, image }) => {
  const handleClick = () => {
    alert(title);
  };

  return (
    <MUICard sx={{ width: 280, minWidth: 260, margin: 1, boxShadow: 3 }}>
      <CardMedia
         component="img"
         image={image}
         alt={title}
         sx={{
           height: "auto",
           maxHeight: 400,
           objectFit: "cover",
           width: "100%",
         }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: 2 }}
          onClick={handleClick}
        >
          Нажми
        </Button>
      </CardContent>
    </MUICard>
  );
};

export default Card;