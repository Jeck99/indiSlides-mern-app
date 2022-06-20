import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/parts/Sidebar/Sidebar";
import Header from "./components/parts/Header/Header";
import Footer from "./components/parts/Footer/Footer";
import PrivateRoute from "./components/parts/Private-Route/Private-Route";
import Slides from "./components/pages/slides/slides";
import Home from "./components/pages/Home/Home";
import Login from "./components/pages/Login/Login";
import { ThemeContext } from "./context/style-context";

const AppRouter = ({ user }) => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <Header user={user} darkMode={darkMode} setDarkMode={setDarkMode} />
      {user ? <Sidebar /> : ""}
      <Routes>
        {/* <Route  exact path="/" element={<PrivateRoute component={Home} />} /> */}
        <Route  exact path="/slides" element={<PrivateRoute component={Slides} />} />
        <Route exact path="/*" element={user ? <Home /> : <Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;
