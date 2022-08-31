import React from "react";
import MyDropzone from "./DropDown";
import classes from "./LaptopForm.module.css";

const LaptopForm = () => {
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
        </select>
      </div>

      <div className={classes.cpu}>
        <select>
          <option selected hiden>
            CPU
          </option>
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
      {/* <div className={classes.last}>
        <label>ლეპტოპის მდგომარეობა</label>
        <div>
          <input type="radio"></input>
          <label>ახალი</label>
          <input type="radio"></input>
          <label> მეორადი</label>
        </div>
      </div> */}
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
