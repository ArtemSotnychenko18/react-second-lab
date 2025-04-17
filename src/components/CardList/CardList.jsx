import React from "react";
import Card from "../Card/Card";
import { Box } from "@mui/material";

const CardList = ({ cards }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
       
        padding: 2,
        flexWrap: "nowrap" 
      }}
    >
      {cards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </Box>
  );
};

export default CardList;