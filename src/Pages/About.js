import React from "react";

function About() {
    return(
        <div className="flex flex-col lg:flex-row h-screen justify-center lg:justify-start m-auto items-center ">
            <h1 className="text-8xl md:text-9xl lg:basis-1/3 text-left">Hi!</h1>
            <p className="block lg:basis-2/3 text-lg md:text-xl lg:text-2xl p-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
}


export default About;