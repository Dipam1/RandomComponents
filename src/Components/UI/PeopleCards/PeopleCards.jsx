import React from "react";
import Card from "./Card/Card";
import "./PeopleCards.css";

const callCardTenTimes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item) => {
  return <Card item={item} />;
});

const PeopleCards = () => {
  return <div className="card-group">{callCardTenTimes}</div>;
};

export default PeopleCards;
