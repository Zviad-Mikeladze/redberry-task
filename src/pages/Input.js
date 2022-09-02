import React, { useState } from "react";
import LaptopForm from "../comonents/LaptopForm";
import PersonForm from "../comonents/PersonForm";
import classes from "./Input.module.css";
const Input = () => {
  const [content, setContent] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [data, setData] = useState({
    name: "",
    surname: "",
    team_id: null,
    position_id: null,
    phone_number: "",
    email: "",
    token: "6dbfdb8e82566c48915203f1d42f259b",
    laptop_name: "",
    laptop_image: "",
    laptop_brand_id: null,
    laptop_cpu: "",
    laptop_cpu_cores: null,
    laptop_cpu_threads: null,
    laptop_ram: null,
    laptop_hard_drive_type: "",
    laptop_state: "",
    laptop_purchase_date: "",
    laptop_price: null,
  });
  const buttonChangeHandler = (event) => {
    setContent(event.target.value);
  };
  const componentsList = [
    <PersonForm
      data={data}
      setData={setData}
      content={content}
      setContent={setContent}
    />,
    <LaptopForm
      setPressed={setPressed}
      data={data}
      setData={setData}
      content={content}
      setContent={setContent}
    />,
  ];

  if (pressed) {
    const body = new FormData();
    body.append("laptop_cpu", data.laptop_cpu);
    body.append("laptop_price", data.laptop_price);
    body.append("", "\\");
    body.append("laptop_purchase_date", data.laptop_purchase_date);
    body.append("", "\\");
    body.append("name", data.name);
    body.append("", "\\");
    body.append("laptop_state", data.laptop_state);
    body.append("", "\\");
    body.append("laptop_cpu_threads", data.laptop_cpu_threads);
    body.append("", "\\");
    body.append("laptop_name", data.laptop_name);
    body.append("", "\\");
    body.append("position_id", data.position_id);
    body.append("", "\\");
    body.append("laptop_image", data.laptop_image);
    body.append("", "\\");
    body.append("laptop_brand_id", data.laptop_brand_id);
    body.append("", "\\");
    body.append("laptop_cpu_cores", data.laptop_cpu_cores);
    body.append("", "\\");
    body.append("laptop_ram", data.laptop_ram);
    body.append("", "\\");
    body.append("token", "6dbfdb8e82566c48915203f1d42f259b");
    body.append("", "\\");
    body.append("phone_number", data.phone_number);
    body.append("", "\\");
    body.append("surname", data.surname);
    body.append("", "\\");
    body.append("email", data.email);
    body.append("", "\\");
    body.append("team_id", data.team_id);
    body.append("", "\\");
    body.append("laptop_hard_drive_type", data.laptop_hard_drive_type);

    fetch("https://pcfy.redberryinternship.ge/api/laptop/create", {
      body,
      headers: {
        Accept: "application/json",
      },
      method: "POST",
    });
  }
  return (
    <div className={classes.inputMain}>
      <button className={classes.back}>
        <b> &lt;</b>{" "}
      </button>
      <div className={classes.buttons}>
        <button value={0} onClick={buttonChangeHandler}>
          თანამშრომლის ინფო
        </button>
        <button value={1} onClick={buttonChangeHandler}>
          ლეპტოპის მახასიათებლები
        </button>
      </div>

      <form>{componentsList[content]}</form>
      <div className={classes.logo}></div>
    </div>
  );
};

export default Input;
