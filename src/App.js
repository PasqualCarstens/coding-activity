import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Slido from "./components/Slido";
import Blanko from "./components/Blanko";
import Tetro from "./components/Tetro";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="Body">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slido" element={<Slido />} />
          <Route path="/blanko" element={<Blanko />} />
          <Route path="/tetro" element={<Tetro />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
