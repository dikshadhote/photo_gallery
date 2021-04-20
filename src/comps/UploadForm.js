import React, { useState } from "react";
import { Button } from "@material-ui/core";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg"];
  const changeHandler = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile && types.includes(selectedFile.type)) {
      setError("");
      setFile(selectedFile);
    } else {
      setFile(null);
      setError(
        "You have selected invalid file type.Only .jpeg and .png files are allowed"
      );
    }
  };
  return (
    <form>
    
    <div style={{margin:"0 auto" }}>
      <label style={{ backgroundColor:"#8824e0",color:"white",padding:"3px",borderRadius:"3px",textAlign:"right",float:"left",margin:"auto" }} > 
          Upload
          <input
            type="file"
            onChange={changeHandler}
            style={{ display: "none" }}
          />  
      </label>
      </div>
      <div class="output">
        {error && <div className="error">{error}</div>}
        {file && <div>{file.name}</div>}
      </div>
    </form>
  );
};
export default UploadForm;
