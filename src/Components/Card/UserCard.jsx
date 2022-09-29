import React from "react";
import Card from "react-bootstrap/Card";
import classes from "./UserCard.module.scss";

const UserCard = (props) => {
  return (
    <Card className={classes.card}>
      <Card.Img
        variant="top"
        src={props.value.avatar}
        className={classes.card__avatar}
      />
      <div className={classes.card__name}>
        {props.value.first_name} {props.value.last_name}
      </div>
      <button className={classes.card__button}> Enviar E-mail </button>
    </Card>
  );
};

export default UserCard;
