import "./Logout.css";
import React from "react";
import { useContext } from "react";
import { FirebaseContext } from "../../../context/firebase-context";
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";

function Logout() {
  const { auth, user } = useContext(FirebaseContext);
  return (
    <>
      <Avatar alt="photoUrl" src={user.photoUrl} />
      {window.screen.width < 600 ? (
        <LogoutIcon onClick={() => auth.signOut()}/>
      ) : (
        <Button
          variant="contained"
          color="primary"
          onClick={() => auth.signOut()}
        >
          Logout
        </Button>
      )}
    </>
  );
}

export default Logout;
