import { createContext, useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebase.js";
import "firebase/compat/auth";
import { useAuthState } from "react-firebase-hooks/auth";
firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();
export const FirebaseContext = createContext();
const FirebaseProvider = ({ children }) => {
  const [user] = useAuthState(firebaseAuth);
  const [auth, setAuth] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAuth(firebaseAuth);
  }, []);
  return (
    <FirebaseContext.Provider value={{ user, auth }}>
      {children}
    </FirebaseContext.Provider>
  );
};
export default FirebaseProvider;
