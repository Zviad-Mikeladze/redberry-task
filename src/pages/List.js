import React, { useEffect, useState } from "react";
import ListComp from "../comonents/ListComp";
import classes from "./List.module.css";
const List = () => {
  const [list, setList] = useState([]);
  

  const fetcList = async () => {
    const response = await fetch(
      "https://pcfy.redberryinternship.ge/api/laptops?token=6dbfdb8e82566c48915203f1d42f259b",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const responselist = await response.json();
    let lists = [];
    for (const key in responselist.data) {
      lists.push({
        laptop: responselist.data[key].laptop,
        user: responselist.data[key].user,
      });
    }
    setList(lists);
  };
  useEffect(() => {
    fetcList();
  }, []);
  
  return (
    <div className={classes.mappedList}>
     

      <ListComp list={list}  />
    </div>
  );
};

export default List;
