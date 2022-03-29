import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/parts/Footer/Footer";
import Sidebar from "./components/parts/Sidebar/Sidebar";
import PrivateRoute from "./components/parts/Private-Route/Private-Route";
import Slides from "./components/pages/slides/slides";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import { FirebaseContext } from "./context/firebase-context";

const AppRouter = () => {
  const { user } = useContext(FirebaseContext);
  return (
    <BrowserRouter>
    {user ? <Sidebar/> : ""}
    
      <Routes>
        <Route exact path="/" element={user ? <Slides/> : <Login/>} />
        <Route path="/slides" element={<PrivateRoute component={Slides} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;
