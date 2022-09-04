import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Landing.module.css";

const Landing = () => {
  return (
    <div>
      <div className={classes.logo}></div>
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
