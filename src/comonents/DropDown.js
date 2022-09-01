import React, { isValidElement, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import classes from './DropDown.module.css'

const MyDropzone = () => {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
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
