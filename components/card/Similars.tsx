import React from "react";
import Card from "../details/Card";
const cards = [
  {
    id: "1",
    image: "/card-example1.png",
    title: "Павел I. Прижизненный портрет. 1780",
    category: "Флора и Фауна",
    price: 30000,
  },
  {
    id: "2",
    image: "/card-example2.png",
    title:
      "Московский Императорский Воспитательный дом. 1857г. Антикварная гравюра",
    category: "Флора и Фауна",
    price: 30000,
  },
  {
    id: "3",
    image: "/card-example3.png",
    title: "Московские зарисовки. 1890г. Хакер/Бренд’амур. Старинная гравира",
    category: "Флора и Фауна",
    price: 30000,
  },
  {
    id: "4",
    image: "/card-example1.png",
    title: "Московские зарисовки. 1890г. Хакер/Бренд’амур. Старинная гравира",
    category: "Флора и Фауна",
    price: 30000,
  },
];
const Similars = () => {
  return (
    <div className="similars">
      <h1 className="title">Похожие товары</h1>
      <div className="similarCards">
        {cards.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Similars;
