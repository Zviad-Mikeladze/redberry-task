import React from "react";
import classes from "./PopUp.module.css";
const PopUp = () => {
  return (
    <div className={classes.popUp}>
      <div className={classes.image}></div>
      <div>
        <h1>ჩანაწერი დამატებულია!</h1>
      </div>
      <div className={classes.buttons}>
        <button className={classes.button1}>სიაში გადაყვანა</button>
        <button className={classes.button2}>მთავარი</button>
      </div>
    </div>
  );
};

export default PopUp;
