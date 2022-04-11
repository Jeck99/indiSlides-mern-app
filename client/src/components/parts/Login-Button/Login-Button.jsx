import "./Login-Button.css";
import { useContext } from "react";
import { FirebaseContext } from "../../../context/firebase-context";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Button } from "@mui/material";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";

function LoginButton() {
  const { auth, user } = useContext(FirebaseContext);
  const googleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
  };
  return (
    <>
      {user?.displayName}
      {window.screen.width < 600 ? (
        <PersonAddAltIcon onClick={googleLogin} />
      ) : (
        <Button variant="contained" color="primary" onClick={googleLogin}>
          Login
        </Button>
      )}
    </>
  );
}
export default LoginButton;
