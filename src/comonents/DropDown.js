import React, { isValidElement, useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import classes from "./DropDown.module.css";

const MyDropzone = (props, setBinaryArr) => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        console.log(binaryStr);
        setBinaryArr(binaryStr);
      };
      reader.readAsBinaryString(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const buttonHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div {...getRootProps()} className={classes.drop}>
      <input {...getInputProps()} />
      <p>ჩააგდე ან ატვირთე ფოტო</p>
      <button onClick={buttonHandler}>ატვირთე</button>
    </div>
  );
};
export default MyDropzone;
