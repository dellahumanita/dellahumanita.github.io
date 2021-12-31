import React from "react";
import {
    Route, 
    NavLink,
    Routes,
    HashRouter
} from "react-router-dom";

import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


function Main() {
    return (
        <HashRouter>
            <div className="">
                <h1 className="font-bold underline">Portfolio</h1>
                <ul className="header">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/projects">projects</NavLink></li>
                    <li><NavLink to="/contact">contact</NavLink></li>
                </ul>

                <div className="">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>

                </div>
            </div>
        </HashRouter>
    );
}

export default Main;