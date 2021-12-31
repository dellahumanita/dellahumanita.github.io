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
            <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-yellow-200 text-white">

                <ul className="flex flex-row justify-between text-xl font-sans font-semibold px-4 py-4">
                    <li><NavLink to="/">🌸</NavLink></li>
                    <li><NavLink to="/about">about</NavLink></li>
                    <li><NavLink to="/projects">projects</NavLink></li>
                    <li><NavLink to="/contact">contact</NavLink></li>
                </ul>

                <div className="container mx-auto">
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