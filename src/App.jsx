import React from "react";
import CardList from "./components/CardList/CardList";
import { Container, Typography } from "@mui/material";

const cardsData = [
  {
    id: 1,
    title: "Таємнича вежа",
    description: "Старовинна кам'яна вежа, що височіє над зеленим пагорбом під безкраїм блакитним небом.",
    image: "https://i.postimg.cc/prcHtCvn/14.jpg"
  },
  {
    id: 2,
    title: "Вечірня тиша",
    description: "Старовинний храм, осяяний м'яким світлом, віддзеркалюється у спокійних водах річки, огорнутий Божою благодаттю.",
    image: "https://i.postimg.cc/Jz4kx466/5328026717782143037.jpg"
  },
  {
    id: 3,
    title: "Загублена фортеця",
    description: "Старовинна кам’яна фортеця, прихована серед диких лісів, занурена в сутінкову атмосферу таємничості.",
    image: "https://i.postimg.cc/s2CRy1kK/16.jpg"
  }
];

const App = () => {
  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom sx={{ marginTop: 4 }}>
        Галерея карток
      </Typography>
      <CardList cards={cardsData} />
    </Container>
  );
};

export default App;