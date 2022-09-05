import React, { useState } from "react";
import LaptopInfo from "./LaptopInfo";
import classes from "./ListComp.module.css";
const ListComp = (list) => {
  const [laptopId, setLaptopId] = useState();
  const [pressed, setPressed] = useState(false);

  const data = list.list;

  
  const buttonhandler = (event) => {
    event.preventDefault();

    setLaptopId(event.target.value);
    setPressed(true);
  };
  const content = (
    <div className={classes.card}>
      <h1>ჩანაწერების სია</h1>
      {data.map((data) => {
        return (
          <div key={data.laptop.id} className={classes.listRow}>
            <div className={classes.images}>
              <img
                src={`https://pcfy.redberryinternship.ge${data.laptop.image} `}
                alt="not found"
              ></img>
            </div>
            <div className={classes.mapedText}>
              <h1>
                {data.user.name} {data.user.surname}
              </h1>
              <h1>{data.laptop.name}</h1>
            </div>
            <button value={data.laptop.id} onClick={buttonhandler}>
              მეტის ნახვა
            </button>
          </div>
        );
      })}
    </div>
  );
  return (
    <div>
      {" "}
      {pressed && <LaptopInfo laptopId={laptopId} />}
      {!pressed && content}
    </div>
  );
};

export default ListComp;
