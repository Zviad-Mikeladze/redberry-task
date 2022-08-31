import React, { useState } from "react";

const InputContext = React.createContext({
  personData: {},
  laptopData: {},
});
const [personData, setPersonData] = useState();
const [laptopData, setLaptopData] = useState();

const dataHandler = (event) => {

}

const contextValue = {
  personData,
  laptopData,
};

return (
  <InputContext.Provider value={contextValue}>
    {props.children}
  </InputContext.Provider>
);
