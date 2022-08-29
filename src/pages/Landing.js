import React from "react";
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <div>
      <div className={classes.logo}></div>
      <div className={classes.frame}>
        <div className={classes.image}></div>
      </div>
      <div className={classes.buttons}>
        <button>ჩანაწერის დამატება</button>
        <button>ჩანაწერების სია</button>
      </div>
    </div>
  );
};

export default Landing;
