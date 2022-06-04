import React from "react";
import { bio, resume, linkedin } from "../Assets/constants"

function About() {
    return(
        <div className="flex flex-col lg:flex-row h-screen justify-center lg:justify-start m-auto items-center">
            <h1 className="text-8xl md:text-9xl lg:basis-1/3 text-left">Hi!</h1>
            <p className="block lg:basis-2/3 text-base md:text-lg p-8">

                { bio }

                <br /> <br />

                <span>If you would like to connect or have similar interests, let's </span>
                <a className="text-light underline hover:italic" href={linkedin}>chat</a>
                <span>! My resume can be found </span>
                <a className="text-light underline hover:italic" href={resume}>here</a>
                <span>.</span>
                
            </p>

        </div>
    );
}


export default About;