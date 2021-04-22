import React,{useEffect} from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({file,setFile}) => {
     //this fires useStorage hook,it uploads file and return url and progress 
    const {url,progress} =useStorage(file);
   
    useEffect(() => {
        if(url)
        {
            //when image upload 100% url is generated and then we have to remove progressBar 
            //for that we have to setfile = null
            setFile(null);
        }
        
    }, [url,setFile]) //there are to depedencies url: input and setfile: output
   
    return <div className="progress-bar" style={{ width: progress +'%'}}></div>;
};
export default ProgressBar;