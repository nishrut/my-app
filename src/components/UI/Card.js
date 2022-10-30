import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.ownClassName}`}>
      {props.children}
    </div>
  );
};

export default Card;
