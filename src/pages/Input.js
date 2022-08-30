import React from "react";
import LaptopForm from "../comonents/LaptopForm";
import PersonForm from "../comonents/PersonForm";
import classes from "./Input.module.css";
const Input = () => {
  return (
    <div className={classes.inputMain}>
      <button className={classes.back}>
        <b> &lt;</b>{" "}
      </button>
      <div className={classes.buttons}>
        <button>თანამშრომლის ინფო</button>
        <button>ლეპტოპის მახასიათებლები</button>
      </div>
      
      <form >
        <LaptopForm />
      </form>
      <div className={classes.logo}>test</div>
    </div>
  );
};

export default Input;
