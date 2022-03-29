import "./Header.css";
import { useContext } from "react";
import Login from "../Login-Button";
import Logout from "../Logout";
import { FirebaseContext } from "../../../context/firebase-context";

function Header() {
  const { user } = useContext(FirebaseContext);
  return (
    <header className="header">
      <img src="logo192.png" className="header__logo"/>
      <h1>Hello {user?.displayName} </h1>
      {user ? <Logout /> : <Login />}
    </header>
  );
}

export default Header;
