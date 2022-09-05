import React, { useEffect, useState } from "react";
import ListComp from "../comonents/ListComp";
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

  return <ListComp list={list} />;
};

export default List;
