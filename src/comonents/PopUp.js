import React from "react";
import { Link } from "react-router-dom";
import classes from "./PopUp.module.css";
const PopUp = () => {
  return (
    <div className={classes.popUp}>
      <div className={classes.image}></div>
      <div>
        <h1>ჩანაწერი დამატებულია!</h1>
      </div>
      <div className={classes.buttons}>
        <Link to="/list">
          <button className={classes.button1}>სიაში გადაყვანა</button>
        </Link>
        <Link to="/">
          <button className={classes.button2}>მთავარი</button>
        </Link>
      </div>
    </div>
  );
};

export default PopUp;
