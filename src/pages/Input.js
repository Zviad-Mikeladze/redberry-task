import React, { useEffect, useState } from "react";
import LaptopForm from "../comonents/LaptopForm";
import PersonForm from "../comonents/PersonForm";
import classes from "./Input.module.css";
const Input = () => {
  const [outputPage, setOutputPage] = useState("true");
  const [content, setContent] = useState();
  const buttonChangeHandler = (event) => {
    setOutputPage(event.target.value);
  };

  useEffect(() => {
    if (outputPage === "true") {
      setContent(<PersonForm />);
    }
    if (outputPage === "false") {
      setContent(<LaptopForm />);
    }
  }, [outputPage]);

  return (
    <div className={classes.inputMain}>
      <button className={classes.back}>
        <b> &lt;</b>{" "}
      </button>
      <div className={classes.buttons}>
        <button value="true" onClick={buttonChangeHandler}>
          თანამშრომლის ინფო
        </button>
        <button value="false" onClick={buttonChangeHandler}>
          ლეპტოპის მახასიათებლები
        </button>
      </div>

      <form>{content}</form>
      <div className={classes.logo}></div>
    </div>
  );
};

export default Input;
