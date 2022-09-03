import React, { useEffect, useState } from "react";
import classes from "./ListComp.module.css";
const ListComp = (list) => {
  const [laptopId, setLaptopId] = useState();
  const [pressed, setPressed] = useState(false);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetcInfo = async () => {
      const response = await fetch(
        "https://pcfy.redberryinternship.ge/api/laptop/1089?token=6dbfdb8e82566c48915203f1d42f259b",
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const responseInfo = await response.json();
      //   console.log(responseInfo);
      let resInfo = [];

      resInfo.push({
        laptop: responseInfo.data.laptop,
        user: responseInfo.data.user,
      });
      setInfo(resInfo);
    };

    fetcInfo();
  }, [pressed]);
  console.log(info);
  const data = list.list;

  const buttonhandler = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    setLaptopId(event.target.value);
    setPressed(true);
  };
  return (
    <div className={classes.card}>
      {data.map((data) => {
        return (
          <div key={data.laptop.id} className={classes.listRow}>
            <div className={classes.images}>
              <img
                src={`https://pcfy.redberryinternship.ge${data.laptop.image} `}
                alt="image not found"
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
};

export default ListComp;
