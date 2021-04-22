import { useState, useEffect } from "react";
import { photoStorage } from "../firebase/firebaseConfig";

const useStorage = (file) => {
  //to see upload progress of image
  const [progress, setProgress] = useState(0);
  //to notify about error while uploading
  const [error, setError] = useState(null);
  //to get database url where file is uploaded
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //to upload name of file in db
    // const storageRef = photoStorage.ref(file.name);
    const storageRef = photoStorage.ref(`uploads/${file.name}`);
    //uploads selected image in storage
    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let percentageTransffered =
          (snap.bytesTransferred * 100) / snap.totalBytes ;
        setProgress(percentageTransffered);
      },
      (err) => {
        setError(err);
      },

      async () => {
        //get url of image uploaded from db
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
