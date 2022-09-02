import React, { useEffect, useState } from "react";
import classes from "./LaptopForm.module.css";

const LaptopForm = ({ content, setContent, data, setData, setPressed }) => {
  const [brandList, setBrandList] = useState([]);
  const [cpuList, setCpuList] = useState([]);
  const [binaryArr, setBinaryArr] = useState();

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

  const lapNameHandler = (event) => {
    setData({ ...data, laptop_name: event.target.value });
  };
  const brandIdHandler = (event) => {
    setData({ ...data, laptop_brand_id: event.target.value });
  };
  const cpuHandler = (event) => {
    setData({ ...data, laptop_cpu: event.target.value });
  };
  const cpuCoresHandler = (event) => {
    setData({ ...data, laptop_cpu_cores: event.target.value });
  };
  const threadsHandler = (event) => {
    setData({ ...data, laptop_cpu_threads: event.target.value });
  };
  const ramHandler = (event) => {
    setData({ ...data, laptop_ram: event.target.value });
  };
  const driveHandler = (event) => {
    setData({ ...data, laptop_hard_drive_type: event.target.value });
  };
  const stateHandler = (event) => {
    setData({ ...data, laptop_state: event.target.value });
  };
  const dateHandler = (event) => {
    setData({ ...data, laptop_purchase_date: event.target.value });
  };
  const priceHandler = (event) => {
    setData({ ...data, laptop_price: +event.target.value });
  };
  const buttonSubmitHandler = (event) => {
    event.preventDefault();

    setPressed(true);
  };

  const imgHandler = (event) => {
    const file = event.target.files[0];

    setData({
      ...data,
      laptop_image: file,
    });
  };

  return (
    <div className={classes.mainInput}>
      <div className={classes.dropDown}>
        <input
          className={classes.drop}
          type="file"
          id="image"
          name="image"
          accept="image/*"
          required
          onChange={imgHandler}
        />
      </div>
      <div className={classes.LapName}>
        <div className={classes.LapNameInput}>
          <label>ლეპტოპის სახელი</label>
          <input type="text" required onChange={lapNameHandler} />
        </div>
        <select onChange={brandIdHandler}>
          <option selected hidden>
            ლეპტოპის ბრენდი
          </option>
          {brandList.map((brand) => {
            return (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            );
          })}
        </select>
      </div>

      <div className={classes.cpu}>
        <select onChange={cpuHandler}>
          <option selected hidden>
            CPU
          </option>
          {cpuList.map((cpu) => {
            return <option key={cpu.id}>{cpu.name}</option>;
          })}
        </select>
        <div className={classes.cpuInput}>
          <label> CPU-ს ბირთვი </label>
          <input onChange={cpuCoresHandler} type="number" />
          <small>მხოლოდ ციფრები</small>
        </div>

        <div className={classes.cpuInput}>
          <label> CPU-ს ნაკადი </label>
          <input onChange={threadsHandler} type="number" />
          <small>მხოლოდ ციფრები</small>
        </div>
      </div>
      <div className={classes.ram}>
        <div className={classes.ramInput}>
          <label>ლეპტოპის RAM(GB)</label>
          <input onChange={ramHandler} type="number" />
          <small>მხოლოდ ციფრები</small>
        </div>
        <div className={classes.ramType}>
          <label> მეხსიერების ტიპი</label>

          <div className={classes.ramRam}>
            <label>SSD</label>
            <input type="radio" value="SSD" onChange={driveHandler} />
            <label>HDD</label>
            <input type="radio" value="HDD" onChange={driveHandler} />
          </div>
        </div>
      </div>
      <div className={classes.buy}>
        <div className={classes.row}>
          <label>შეძენის რიცხვი(არჩევითი)</label>
          <input onChange={dateHandler} type="date" />
        </div>
        <div className={classes.row}>
          <label>ლეპტოპის ფასი</label>
          <input onChange={priceHandler} />
          <small>მხოლოდ ციფრები</small>
        </div>
      </div>
      <div className={classes.last}>
        <label>ლეპტოპის მდგომარეობა</label>
        <div className={classes.lastRadio}>
          <input type="radio" value="new" onChange={stateHandler} />
          <label>ახალი</label>
          <input type="radio" value="used" onChange={stateHandler} />
          <label> მეორადი</label>
        </div>
      </div>
      <div className={classes.buttons}>
        <button
          className={classes.button1}
          onClick={() => {
            setContent(content - 1);
          }}
        >
          <b>უკან</b>
        </button>
        <button className={classes.button2} onClick={buttonSubmitHandler}>
          <b>დამახსოვრება</b>
        </button>
      </div>
    </div>
  );
};

export default LaptopForm;
