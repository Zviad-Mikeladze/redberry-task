import React, { useEffect, useState } from "react";
import classes from "./LaptopInfo.module.css";

const LaptopInfo = (laptopId) => {
  console.log(laptopId);
  const [info, setInfo] = useState([]);
  useEffect(() => {
    const fetcInfo = async () => {
      const response = await fetch(
        `https://pcfy.redberryinternship.ge/api/laptop/${laptopId.laptopId}?token=6dbfdb8e82566c48915203f1d42f259b`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      const responseInfo = await response.json();
      console.log(responseInfo);
      let resInfo = [];

      resInfo.push({
        laptop: responseInfo.data.laptop,
        user: responseInfo.data.user,
      });
      setInfo(resInfo);
    };

    fetcInfo();
  }, [laptopId]);

  const userInfo = info.map((info) => {
    return (
      <div key={laptopId.laptopId}>
        {" "}
        <img
          src={`https://pcfy.redberryinternship.ge${info.laptop.image} `}
          alt="image not found"
        ></img>
        <div className={classes.userData}>
          <div>
            <p>სახელი:</p>
            <p>თიმი:</p>
            <p>პოზიცია:</p>
            <p>მეილი:</p>
            <p>ტელ.ნომერი:</p>
          </div>
          <div key={info.laptop.name}>
            <p>
              {info.user.name} {info.user.surname}
            </p>
            <p>{info.user.team_id}</p>
            <p>{info.user.position_id}</p>
            <p>{info.user.email}</p>
            <p>{info.user.phone_number}</p>
          </div>
        </div>
      </div>
    );
  });
  const lapHardInfo = info.map((info) => {
    return (
      <div key={laptopId.laptopId} className={classes.userData}>
        <div>
          <p>ლეპტოპის სახელი:</p>
          <p>ლეპტოპის ბრენდი:</p>
          <p>RAM:</p>
          <p>მეხსიერების ტიპი:</p>
          <p>CPU:</p>
          <p>CPU ბითვი:</p>
          <p>CPU ნაკადი:</p>
        </div>
        <div>
          {" "}
          <p>{info.laptop.name}</p>
          <p>{info.laptop.brand_id}</p>
          <p>{info.laptop.ram}</p>
          <p>{info.laptop.hard_drive_type}</p>
          <p>{info.laptop.cpu.name}</p>
          <p>{info.laptop.cpu.cores}</p>
          <p>{info.laptop.cpu.threads}</p>
        </div>
      </div>
    );
  });
  const lapStateInfo = info.map((info) => {
    return (
      <div key={laptopId.laptopId} className={classes.userData}>
        <div>
          <p>ლეპტოპის მდგომარეობა:</p>
          <p>ლეპტოპის ფასი:</p>
          <p>შეძენის რიცხვი:</p>
        </div>
        <div>
          <p>{info.laptop.state}</p>
          <p>{info.laptop.price}</p>
          <p>{info.laptop.purchase_date}</p>
        </div>
      </div>
    );
  });

  return (
    <div>
      <h1> ლეპტოპის ინფო</h1>
      <div>
        <div>{userInfo}</div>
        <hr />
        <div>{lapHardInfo}</div>
        <hr />
        <div>{lapStateInfo}</div>
      </div>
    </div>
  );
};

export default LaptopInfo;