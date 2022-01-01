import React from "react";

function About() {
    return(
        <div className="flex flex-col lg:flex-row h-screen justify-center lg:justify-start m-auto items-center">
            <h1 className="text-8xl md:text-9xl lg:basis-1/3 text-left">Hi!</h1>
            <p className="block lg:basis-2/3 text-base md:text-lg p-8">
                My name is Della and I am a fourth year Computing Science student at the University of Alberta. I am currently looking for full-time software development roles after graduating in Spring 2022. 
                
                <br /> <br />
                My curiosity for people and programming has led me to pursue a career in software development that explores the intersection of how technology and people work together. As an advocate for the user, I strive to create software that is intuitive, aesthetic, and accessible to everyone.

                <br /> <br />
                In my free time, I love to explore creative hobbies such as illustration, knitting, and playing guitar.

                <br /> <br />

                <span>If you would like to connect or have similar interests, let's </span>
                <a className="text-light underline hover:italic" href="https://www.linkedin.com/in/dellahumanita/">chat</a>
                <span>! My resume can be found </span>
                <a className="text-light underline hover:italic" href="https://drive.google.com/file/d/1pmdmycDJu0gAqbUuXkLM2VERqFyqcqur/view?usp=sharing">here</a>
                <span>.</span>
                
            </p>

        </div>
    );
}


export default About;