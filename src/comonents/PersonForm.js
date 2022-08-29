import React, { useEffect, useState } from "react";

const PersonForm = () => {
  const [teamsList, setTeamsList] = useState([]);
  const [positionsList, setPositionsList] = useState([]);

  useEffect(() => {
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
        positions.push({
          id: responseData.data[key].id,
          name: responseData.data[key].name,
        });
      }
      setPositionsList(positions);
    };

    teamFetch();
    positionFetCh();
  }, []);
  console.log(positionsList);
  return (
    <div>
      <form>
        <div>
          <input></input>
          <input></input>
        </div>
        <select>
          <option disabled selected hidden>
            თიმი
          </option>
          {teamsList.map((teams) => {
            return <option key={teams.id}>{teams.name}</option>;
          })}
        </select>
        <select>
          <option disabled selected hidden>
            პოზიცია
          </option>
          {positionsList.map((position) => {
            return <option key={position.id}>{position.name}</option>;
          })}
        </select>
        <input></input>
        <input></input>
      </form>
    </div>
  );
};

export default PersonForm;
