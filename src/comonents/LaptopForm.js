import React, { useEffect, useState } from "react";
import MyDropzone from "./DropDown";
import classes from "./LaptopForm.module.css";

const LaptopForm = () => {
  const [brandList, setBrandList] = useState([]);
  const [cpuList, setCpuList] = useState([]);

  const brandFetch = async () => {
    const response = await fetch(
      "https://pcfy.redberryinternship.ge/api/brands",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const responseData = await response.json();
    const brands = [];
    for (const key in responseData.data) {
      brands.push({
        id: responseData.data[key].id,
        name: responseData.data[key].name,
      });
    }
    setBrandList(brands);
  };
  const cpuFetch = async () => {
    const response = await fetch(
      "https://pcfy.redberryinternship.ge/api/cpus",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const responseData = await response.json();

    const cpus = [];
    for (const key in responseData.data) {
      cpus.push({
        id: responseData.data[key].id,
        name: responseData.data[key].name,
      });
    }
    setCpuList(cpus);
  };
  useEffect(() => {
    cpuFetch();
    brandFetch();
  }, []);
  console.log(cpuList);
  //   const [data, setData] = useState({});
  //   const buttonSubmitHandler = (event) => {
  //     event.preventDefault();
  //     setData(event.target.value);
  //     console.log(event.target.value)
  //   };
  //   console.log(data);
  return (
    <div className={classes.mainInput}>
      <div className={classes.dropDown}>
        <MyDropzone />
      </div>
      <div className={classes.LapName}>
        <div className={classes.LapNameInput}>
          <label>ლეპტოპის სახელი</label>
          <input />
        </div>
        <select>
          <option selected hidden>
            ლეპტოპის ბრენდი
          </option>
          {brandList.map((brand) => {
            return <option key={brand.id}>{brand.name}</option>;
          })}
        </select>
      </div>

      <div className={classes.cpu}>
        <select>
          <option selected hiden>
            CPU
          </option>
          {cpuList.map((cpu) => {
            return <option key={cpu.id}>{cpu.name}</option>;
          })}
        </select>
        <div className={classes.cpuInput}>
          <label> CPU-ს ბირთვი </label>
          <input></input>
          <small>მხოლოდ ციფრები</small>
        </div>

        <div className={classes.cpuInput}>
          <label> CPU-ს ნაკადი </label>
          <input />
          <small>მხოლოდ ციფრები</small>
        </div>
      </div>
      <div className={classes.ram}>
        <div className={classes.ramInput}>
          <label>ლეპტოპის RAM(GB)</label>
          <input></input>
          <small>მხოლოდ ციფრები</small>
        </div>
        <div className={classes.ramType}>
          <label> მეხსიერების ტიპი</label>

          <div className={classes.ramRam}>
            <labbel>SSD</labbel>
            <input type="radio"></input>
            <labbel>HDD</labbel>
            <input type="radio"></input>
          </div>
        </div>
      </div>
      <div className={classes.buy}>
        <div className={classes.row}>
          <label>შეძენის რიცხვი(არჩევითი)</label>
          <input></input>
        </div>
        <div className={classes.row}>
          <label>ლეპტოპის ფასი</label>
          <input></input>
          <small>მხოლოდ ციფრები</small>
        </div>
      </div>
      <div className={classes.last}>
        <label>ლეპტოპის მდგომარეობა</label>
        <div className={classes.lastRadio}>
          <input type="radio"></input>
          <label>ახალი</label>
          <input type="radio"></input>
          <label> მეორადი</label>
        </div>
      </div>
      <div className={classes.buttons}>
        <button className={classes.button1}>
          <b>უკან</b>
        </button>
        <button className={classes.button2}>
          <b>დამახსოვრება</b>
        </button>
      </div>
    </div>
  );
};

export default LaptopForm;
