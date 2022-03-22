import { useContext } from "react";
import {  Navigate } from "react-router-dom";
import { UserContext } from "../../../context/user-context";

const PrivateRoute = ({ component: Component }) => {
  let auth = useContext(UserContext);
  return !auth.user ? <Navigate to="/login" /> : <Component />;
};

export default PrivateRoute;
