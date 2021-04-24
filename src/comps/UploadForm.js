import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "images/jpg"];
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div>
          <label
            style={{
              backgroundColor: "#8824e0",
              color: "white",
              padding: "5px",
              borderRadius: "3px",
              textAlign: "right",
              float: "left",
              margin: "auto",
            }}
          >
            Upload
            <input
              type="file"
              onChange={changeHandler}
              style={{ display: "none" }}
            />
          </label>
        </div>
        <div className="output">
          {
            //right side of && gives output when left side is true
            error && <div className="error">{error}</div>
          }
          {file && <div style={{ padding: "3px" }}>{file.name}</div>}
          {
            //pass 'file' to progessBar to track progress of uploading and 'setFile' to reset value of file to null after uploading of file
            file && <ProgressBar file={file} setFile={setFile} />
          }
        </div>
      </div>
    </form>
  );
};
export default UploadForm;
