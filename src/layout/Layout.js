import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Logement from "../pages/Logement/Logement";
import Header from "./Header/header";

function Layout() {
  return (
    <div>
      <Header />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement" element={<Logement />} />
        <Route path="error" element={<Error />} />
      </Routes>
      <br />
    </div>
  );
}

export default Layout;
