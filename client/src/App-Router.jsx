import { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { UserContext } from "./context/user-context.jsx";
import Footer from "./components/parts/Footer/Footer";
import PrivateRoute from "./components/parts/Private-Route/Private-Route";
import Students from "./components/pages/Students/Students";
import Slides from "./components/pages/slides/slides";
import Login from "./components/pages/Login/Login";
import Register from "./components/pages/Register/Register";
import { FirebaseContext } from "./context/firebase-context";

const AppRouter = () => {
  const { user } = useContext(FirebaseContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={user ? <Slides/> : <Login/>} />
        <Route exact path="/students" element={user ? <Students/> : <Login/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route
          path="/Slides"
          element={<PrivateRoute component={<Slides />} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;
