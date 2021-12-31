import React from "react";
import { NavLink } from "react-router-dom";


function Home() {

    return (
        <div className="flex flex-col items-center justify-center h-screen text-white">
            <h1 className="font-serif lg:text-9xl hover:italic">
                <NavLink to="/about">
                    Della Humanita
                </NavLink>
            </h1>
            <h2 className="font-sans lg:text-5xl md:text-3xl hover:underline">
                <NavLink to="/projects">
                    software developer
                </NavLink>
            </h2>
        </div>
    )
}

export default Home;