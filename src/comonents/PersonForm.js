import React, { useEffect, useState } from "react";
import "./PersonForm.module.css";
import classes from "./PersonForm.module.css";
const PersonForm = ({ content, setContent, data, setData }) => {
  const [teamsList, setTeamsList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState();
  const [positionsList, setPositionsList] = useState([]);

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
    const teams = [];
    for (const key in responseData.data) {
      teams.push({
        id: responseData.data[key].id,
        name: responseData.data[key].name,
      });
    }
    setTeamsList(teams);
  };
  useEffect(() => {
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
      const positions = [];

      for (const key in responseData.data) {
        if (selectedTeam == responseData.data[key].team_id) {
          positions.push({
            teamId: responseData.data[key].team_id,

            id: responseData.data[key].id,
            name: responseData.data[key].name,
          });
        }
        setPositionsList(positions);
      }
    };

    positionFetCh();
  }, [selectedTeam]);
  useEffect(() => {
    teamFetch();
  }, []);
  const nameHandler = (event) => {
    setData({ ...data, name: event.target.value });
  };
  const surnameHandler = (event) => {
    setData({ ...data, surname: event.target.value });
  };
  const teamsChangeHandler = (event) => {
    setSelectedTeam(event.target.value);

    setData({ ...data, team_id: event.target.value });
  };
  const positionChangeHandler = (event) => {
    setData({ ...data, position_id: event.target.value });
  };
  const emailHandler = (event) => {
    setData({ ...data, email: event.target.value });
  };
  const phoneNumberHandler = (event) => {
    setData({ ...data, phone_number: event.target.value });
  };

  const buttonSubmitHandler = () => {
    setContent(content + 1);
  };

  return (
    <div className={classes.mainInput}>
      <div className={classes.inputFullName}>
        <div className={classes.inputName}>
          <label>სახელი</label>
          <input
            placeholder="გრიშა"
            onChange={nameHandler}
            type="text"
            required
          />
          <small>მინიმუმ 2 სიმბოლო, ქართული ასოები</small>
        </div>
        <div className={classes.inputName}>
          {" "}
          <label>გვარი</label>
          <input
            placeholder="ბაგრატიონი"
            type="text"
            required
            onChange={surnameHandler}
          />
          <small>მინიმუმ 2 სიმბოლო, ქართული ასოები</small>
        </div>
      </div>
      <select required onChange={teamsChangeHandler}>
        <option disabled selected hidden>
          თიმი
        </option>
        {teamsList.map((teams) => {
          return (
            <option value={teams.id} key={teams.id} id={teams.teamId}>
              {teams.name}
            </option>
          );
        })}
      </select>
      <select required onChange={positionChangeHandler}>
        <option disabled selected hidden>
          პოზიცია
        </option>
        {positionsList.map((position) => {
          return (
            <option value={position.id} key={position.id}>
              {position.name}
            </option>
          );
        })}
      </select>
      <div className={classes.inputOther}>
        <label>მეილი</label>
        <input
          placeholder="grish666@redberry.ge"
          required
          onChange={emailHandler}
        />
        <small>უნდა მთვრდებოდეს @redberry.ge-ით</small>
        <label>ტელეფონის ნომერი</label>
        <input
          placeholder="+995598000701"
          required
          value={data.phone_number}
          onChange={phoneNumberHandler}
        />
        <small>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</small>
      </div>
      <div className={classes.formButton}>
        <button onClick={buttonSubmitHandler}>
          {" "}
          <b> შემდეგი </b>
        </button>
      </div>
    </div>
  );
};

export default PersonForm;
