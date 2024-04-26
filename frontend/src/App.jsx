import './AppS.scss';
import {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom"; // useNavigate ni import qilamiz
import Register from "./page/Register.jsx";
import Login from "./page/Login.jsx";
import Statistic from "./home/Statistic.jsx";
import Home from "./home/Home.jsx";
import Reyestr from "./home/Reyestr.jsx";
import Finding from "./home/Finding.jsx";
import About from "./home/About.jsx";
import img from "./Topilmalar.jpg"
import FindingById from "./home/FindingById.jsx";
import FindingAll from "./home/FindingAll.jsx";
import AdminFinding from "./home/AdminFinding.jsx";
import FindingByIdAdmin from "./home/FindingByIdAdmin.jsx";

function App() {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null);
    const handleNavigation = (path) => {
        navigate(path);
        setActiveButton(path); // Set the active button when it's clicked
    };
    let key = localStorage.getItem("key")

    useEffect(() => {

    }, [key]);


    return (
        <div className="container">
            <div className={"menu"}>

                <div>
                    <img src={img} alt=""/>
                </div>
                <div>
                    <button
                        className={activeButton === "/reyestr" ? "active" : ""}
                        onClick={() => handleNavigation("/reyestr")}
                    >
                        Reyestr
                    </button>
                    <button
                        className={activeButton === "/about" ? "active" : ""}
                        onClick={() => handleNavigation("/about")}
                    >
                        About
                    </button>
                    <button
                        className={activeButton === "/statistic" ? "active" : ""}
                        onClick={() => handleNavigation("/statistic")}
                    >
                        Statistic
                    </button>
                    <button
                        className={activeButton === "/" ? "active" : ""}
                        onClick={() => handleNavigation("/")}
                    >
                        Home
                    </button>



                </div>
                <div>
                    <button
                        className={activeButton === "/login" ? "active" : ""}
                        onClick={() => handleNavigation("/login")}
                    >
                    Login
                    </button>

                    <button
                        className={activeButton === "/finding" ? "active" : ""}
                        onClick={() => handleNavigation("/finding")}
                    >
                        Finding
                    </button>
                </div>


            </div>
            <Routes>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/reyestr"} element={<Reyestr/>}/>
                <Route path={"/about"} element={<About/>}/>
                <Route path={"/statistic"} element={<Statistic/>}/>
                <Route path={"/finding"} element={<Finding/>} />
                <Route path={"/"} element={<Home />} />
                <Route path={"/findingById"} element={<FindingById />} />
                <Route path={"/all"} element={<FindingAll />} />
                <Route path={"/admin"} element={<AdminFinding />} />
                <Route path={"/findingByIdAdmin"} element={<FindingByIdAdmin />} />
            </Routes>
        </div>
    );
}

export default App;
