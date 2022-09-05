import React, { useEffect, useState } from "react";
import LaptopForm from "../comonents/LaptopForm";
import PersonForm from "../comonents/PersonForm";
import classes from "./Input.module.css";
import PopUp from "../comonents/PopUp";
import { Link } from "react-router-dom";
const Input = () => {
  const [content, setContent] = useState(0);
  const [page, setPage] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [succes, setSucces] = useState(false);
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
  const body = new FormData();
  body.append("laptop_cpu", data.laptop_cpu);
  body.append("laptop_price", data.laptop_price);
  body.append("laptop_purchase_date", data.laptop_purchase_date);
  body.append("name", data.name);
  body.append("laptop_state", data.laptop_state);
  body.append("laptop_cpu_threads", data.laptop_cpu_threads);
  body.append("laptop_name", data.laptop_name);
  body.append("position_id", data.position_id);
  body.append("laptop_image", data.laptop_image);
  body.append("laptop_brand_id", data.laptop_brand_id);
  body.append("laptop_cpu_cores", data.laptop_cpu_cores);
  body.append("laptop_ram", data.laptop_ram);
  body.append("token", "6dbfdb8e82566c48915203f1d42f259b");
  body.append("phone_number", data.phone_number);
  body.append("surname", data.surname);
  body.append("email", data.email);
  body.append("team_id", data.team_id);
  body.append("laptop_hard_drive_type", data.laptop_hard_drive_type);

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
  const posting = async () => {
    if (pressed) {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/laptop/create",
        {
          body,
          headers: {
            Accept: "application/json",
          },
          method: "POST",
        }
      );
      const errData = await response.json();

      if (!response.ok) {
        setSucces(false);
        throw new Error(errData.message || "Could not create form data.");
      } else {
        setSucces(true);
      }
    }
  };
  useEffect(() => {
    setPressed(false);
    posting();
  }, [pressed]);
  const popap = <div></div>;
  const unsucces = (
    <div className={classes.inputMain}>
      <div className={classes.butn}>
        <div className={classes.arrowButton}>
          <Link to="/">
            <button
              onClick={() => {
                setPage(page - 1);
                if (content > 0) {
                  setContent(content - 1);
                }
              }}
            >
              <div className={classes.arrow}></div>
            </button>
          </Link>
        </div>
      </div>
      <div className={classes.buttons}>
        <button value={0} onClick={buttonChangeHandler}>
          თანამშრომლის ინფო
        </button>
        <button value={1} onClick={buttonChangeHandler}>
          ლეპტოპის მახასიათებლები
        </button>
      </div>

      <form value={data}>{!succes && componentsList[content]}</form>

      <div className={classes.logo}></div>
    </div>
  );

  return (
    <div>
      {succes && <PopUp />}
      {!succes && unsucces}
    </div>
  );
};

export default Input;
