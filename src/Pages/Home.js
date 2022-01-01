import React from "react";
import { NavLink } from "react-router-dom";


function Home() {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="font-serif hover:italic hover:text-white text-7xl md:text-9xl p-5 text-center">
                <NavLink to="/about">
                    Della Humanita
                </NavLink>
            </h1>
            <h2 className="font-sans hover:underline hover:text-white text-2xl lg:text-5xl md:text-3xl">
                <NavLink to="/projects">
                    software developer
                </NavLink>
            </h2>
        </div>
    )
}

export default Home;