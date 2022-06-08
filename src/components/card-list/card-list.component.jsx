import React, { Component } from "react";
import Card from "../card-component/card.component";
import "./card-list.style.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
