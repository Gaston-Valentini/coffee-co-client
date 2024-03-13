import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Menu from "./views/Menu/Menu";
import Register from "./views/Register/Register";

export default function App() {
    return (
        <Router>
            <div className={style.app}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/register" element={<Register />} />
                </Routes>
            </div>
        </Router>
    );
}
