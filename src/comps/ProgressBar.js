import React from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = (file,setFile) => {
     //this fires useStorage hook,it uploads file and return url and progress 
    const {url,progress} =useStorage(file);
   console.log(progress);
    return <div className="progress-bar"></div>;
};
export default ProgressBar;