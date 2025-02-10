import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home/Home";
import About from "@/pages/About/About";
import Error from "@/pages/Error/Error";
import Logement from "@/pages/Logement/Logement";

import "./App.css";

import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
