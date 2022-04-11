import "./Header.css";
import Login from "../Login-Button";
import Logout from "../Logout";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function Header({ user, darkMode, setDarkMode }) {
  const switchTheme = (e) => {
    setDarkMode(e.target.checked);
    document.body.classList.toggle("dark-theme");
  };
  return (
    <header className="header">
      <div className="right-side">
        <img src="logo192.png" className="header__logo" alt="" />
        <div id="theme-switch">
          <Switch color="warning" defaultChecked onChange={switchTheme} />
          <span>{darkMode ? "Dark Theme" : "Light Theme"}</span>
        </div>
      </div>
      <div className="left-side">
        <h1 className="hello-text">{user?.displayName} </h1>
        {user ? <Logout /> : <Login />}
      </div>
    </header>
  );
}

export default Header;
