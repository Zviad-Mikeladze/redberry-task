import React, { useEffect, useState } from "react";
import "./PersonForm.module.css";
import classes from "./PersonForm.module.css";
const PersonForm = () => {
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

  const teamsChangeHandler = (event) => {
    setSelectedTeam(event.target.value);
  };
  const positionChangeHandler = (event) => {};

  return (
    <div className={classes.mainInput}>
      <div className={classes.inputFullName}>
        <div className={classes.inputName}>
          <label>სახელი</label>
          <input type="text" required />
          <p>test2</p>
        </div>
        <div className={classes.inputName}>
          {" "}
          <label>გვარი</label>
          <input type="text" required />
          <small>test</small>
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
        <input required />
        <small>უნდა მთვრდებოდეს @redberry.ge-ით</small>
        <label>ტელეფონის ნომერი</label>
        <input required />
        <small>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</small>
      </div>

      <button className={classes.formButton}>
        {" "}
        <b> შემდეგი </b>
      </button>
    </div>
  );
};

export default PersonForm;
