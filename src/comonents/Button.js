import React from "react";

import classes from "./Button.module.css";

const Button = (page, setPage) => {


  return (
    <div className={classes.arrowButton}>
      <button
      
      >
        <div className={classes.arrow}></div>
      </button>
    </div>
  );
};

export default Button;
