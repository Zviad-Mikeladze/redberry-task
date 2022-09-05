import React from "react";
import { useHistory } from "react-router-dom";
import classes from "./Button.module.css";

const Button = (page, setPage) => {
  const history = useHistory();

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
