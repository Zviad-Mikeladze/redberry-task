import React from "react";
import { Link } from "react-router-dom";
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={classes.imgMain}>
      <div className={classes.logo1}></div>
      <div className={classes.logo2}></div>
      <div className={classes.frame}>
        <div className={classes.image}></div>
      </div>
      
      <div className={classes.buttons}>
        <Link to="/input">
          <button>ჩანაწერის დამატება</button>
        </Link>
        <Link to="/list">
          <button>ჩანაწერების სია</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
