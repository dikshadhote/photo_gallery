import { useState, useEffect } from "react";
import { photoFirestore } from "../firebase/firebaseConfig";

//This function is used to fetch images from firestore
const useFirestore = (collection) => {
  const [docs, setDocs] = useState(null);

  //use useEffect whenever the collection is changed i.e. new photo is added
  useEffect(() => {
    const unsub = photoFirestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        // array to store documents returned from taking snapshot of collection
        let documents = [];
        //iterate through documents from collection and push data and id to documents array
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub(); //unsubscribe from collection when we no longer use it
  }, [collection]);

  return { docs };
};

export default useFirestore;
