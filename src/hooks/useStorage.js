import { useState, useEffect } from "react";
import { photoStorage } from "../firebase/firebaseConfig";

const useStorage = (file) => {
  //to see upload progress of image
  const [progress, setProgress] = useState(0);
  //to notify about error while uploading
  const [error, setError] = useState(null);
  //to get database url where file is uploaded
  const [url, setUrl] = useState(null);
};
