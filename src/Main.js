import React from "react";
import {
    Route, 
    NavLink,
    Routes,
    BrowserRouter
} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';


export default function Main() {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gradient-radial-at-bl from-dark via-mid to-light text-white">

                <ul className="flex flex-row justify-between text-xl font-sans font-semibold px-4 py-4">
                    <li className="hover:text-indigo-500">
                        <NavLink to="/">🌸</NavLink>
                    </li>
                    <li className="hover:text-indigo-500">
                        <NavLink to="/about">about</NavLink>
                    </li>
                    <li className="hover:text-indigo-500">
                        <NavLink to="/projects">projects</NavLink>
                    </li>
                    <li className="hover:text-indigo-500">
                        <NavLink to="/contact">contact</NavLink>
                    </li>
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
        </BrowserRouter>
    );
}
