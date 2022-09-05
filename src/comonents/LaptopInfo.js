import React, { useEffect, useState } from "react";
import classes from "./LaptopInfo.module.css";

const LaptopInfo = (laptopId) => {
  const [info, setInfo] = useState([]);
  const [team, setTeam] = useState();
  const [position, setPosition] = useState();
  const [brand, setBrand] = useState();
  const [selected, setSelected] = useState([]);

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

    let resInfo = [];

    resInfo.push({
      laptop: responseInfo.data.laptop,
      user: responseInfo.data.user,
    });
    setInfo(resInfo);
    setSelected({
      teamId: responseInfo.data.user.team_id,
      positionId: responseInfo.data.user.position_id,
      brandId: responseInfo.data.laptop.brand_id,
    });
  };
  const teamFetch = async () => {
    const response = await fetch(
      "https://pcfy.redberryinternship.ge/api/teams",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );

    const responseData = await response.json();

    let teams;
    for (const key in responseData.data) {
      if (selected.teamId == responseData.data[key].id) {
        teams = responseData.data[key].name;
      }

      setTeam(teams);
    }
  };
  const positionFetCh = async () => {
    const response = await fetch(
      "https://pcfy.redberryinternship.ge/api/positions",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    const responseData = await response.json();
    let positions;

    for (const key in responseData.data) {
      if (selected.teamId == responseData.data[key].team_id) {
        if (selected.positionId == responseData.data[key].id) {
          positions = responseData.data[key].name;
        }
        setPosition(positions);
      }
    }
  };
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

    let brands;

    for (const key in responseData.data) {
      if (selected.brandId == responseData.data[key].id) {
        brands = responseData.data[key].name;
      }

      setBrand(brands);
    }
  };

  useEffect(() => {
    fetcInfo();
  }, [laptopId]);
  useEffect(() => {
    teamFetch();
    positionFetCh();
    brandFetch();
  }, [selected]);

  const userInfo = info.map((info) => {
    return (
      <div key={laptopId.laptopId} className={classes.Info}>
        {" "}
        <img
          src={`https://pcfy.redberryinternship.ge${info.laptop.image} `}
          alt="not found"
        ></img>
        <div className={classes.names}>
          <div>
            <p>სახელი:</p>
            <p>თიმი:</p>
            <p>პოზიცია:</p>
            <p>მეილი:</p>
            <p>ტელ.ნომერი:</p>
          </div>
          <div key={info.laptop.name}>
            <p>
              {info.userName} {info.user.surname}
            </p>
            <p>{team}</p>
            <p>{position}</p>
            <p>{info.user.email}</p>
            <p>{info.user.phone_number}</p>
          </div>
        </div>
      </div>
    );
  });
  const lapHardInfo = info.map((info) => {
    return (
      <div key={laptopId.laptopId} className={classes.hard}>
        <div>
          {" "}
          <p>ლეპტოპის სახელი:</p>
          <p>ლეპტოპის ბრენდი:</p>
          <p>RAM:</p>
          <p>მეხსიერების ტიპი:</p>
        </div>
        <div>
          {" "}
          <p>{info.laptop.name}</p>
          <p>{brand}</p>
          <p>{info.laptop.ram}</p>
          <p>{info.laptop.hard_drive_type}</p>
        </div>
        <div>
          {" "}
          <p>CPU:</p>
          <p>CPU ბითვი:</p>
          <p>CPU ნაკადი:</p>
        </div>
        <div>
          {" "}
          <p>{info.laptop.cpu.name}</p>
          <p>{info.laptop.cpu.cores}</p>
          <p>{info.laptop.cpu.threads}</p>
        </div>
      </div>
    );
  });
  const lapStateInfo = info.map((info) => {
    return (
      <div key={laptopId.laptopId} className={classes.state}>
        <div>
          <p>ლეპტოპის მდგომარეობა:</p>
          <p>ლეპტოპის ფასი:</p>
        
        </div>
       
        <div>
          <p>{info.laptop.state}</p>
          <p>{info.laptop.price}</p>
          
        </div>
        <div>  <p>შეძენის რიცხვი:</p></div>
        <div><p>{info.laptop.purchase_date}</p></div>
      </div>
    );
  });

  return (
    <div className={classes.userData}>
      <h1> ლეპტოპის ინფო</h1>
      <div className={classes.card}>
        <div> {userInfo}</div>

        <hr />
        <div>{lapHardInfo}</div>
        <hr />
        <div>{lapStateInfo}</div>
      </div>
    </div>
  );
};

export default LaptopInfo;
