import React from "react";
import {
    Route, 
    NavLink,
    Routes,
    BrowserRouter,
    HashRouter
} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';


export default function Main() {

    return (
        <HashRouter>
            <div className="bg-gradient-radial-at-bl from-dark via-mid to-light text-white flex flex-col h-full justify-between">

                <ul className="flex flex-row justify-between text-xl md:text-2xl font-sans font-semibold px-4 py-4">
                    <li className="hover:text-dark active:text-dark">
                        <NavLink to="/">🌸</NavLink>
                    </li>
                    <li className="hover:text-dark active:text-dark">
                        <NavLink to="/about">about</NavLink>
                    </li>
                    <li className="hover:text-dark active:text-dark">
                        <NavLink to="/projects">projects</NavLink>
                    </li>
                    <li className="hover:text-dark active:text-dark">
                        <NavLink to="/contact">contact</NavLink>
                    </li>
                </ul>

                <div className="container mx-auto mb-auto">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>


                </div>

                <footer className="flex w-full justify-end px-4 py-2">
                    <span>Made with ♥️ in 2022</span>
                </footer>
            </div>
        </HashRouter>
    );
}
