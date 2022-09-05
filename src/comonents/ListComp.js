import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className={classes.item}>
        {data.map((data) => {
          return (
            <div className={classes.cali}>
              <img
                src={`https://pcfy.redberryinternship.ge${data.laptop.image} `}
                alt="not found"
              ></img>

              <div className={classes.listTitle}>
                <h1>
                  {data.user.name} {data.user.surname}
                </h1>
                <h1>{data.laptop.name}</h1>

                <button value={data.laptop.id} onClick={buttonhandler}>
                  მეტის ნახვა
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  return (
    <div className={classes.mein}>
      <div className={classes.butn}>
        <div className={classes.arrowButton}>
          <Link to="/input">
            <button>
              <div className={classes.arrow}></div>
            </button>
          </Link>
        </div>
      </div>{" "}
      {pressed && <LaptopInfo laptopId={laptopId} />}
      {!pressed && content}
    </div>
  );
};

export default ListComp;
