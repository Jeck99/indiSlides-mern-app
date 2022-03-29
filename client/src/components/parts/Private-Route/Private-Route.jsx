import { useContext } from "react";
import {  Navigate } from "react-router-dom";
import { FirebaseContext } from "../../../context/firebase-context";

const PrivateRoute = ({ component: Component }) => {
  let {user} = useContext(FirebaseContext);
  return !user ? <Navigate to="/login" /> : <Component />;
};

export default PrivateRoute;
