import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

import { projects } from "../Assets/constants";
import ProjectCard from "../Components/ProjectCard";


function Projects() {

    library.add(fab, fas);
    console.log(projects);

    return (
        <div className="flex flex-col h-screen justify-center m-auto gap-4">
            <header className="flex justify-start pb-5">
                <h1 className="text-7xl md:text-8xl hover:italic">Projects</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-items-stretch">
                {projects.map((projectDetails, i) => 
                    <div 
                        className="bg-white shadow-xl rounded-lg overflow-hidden bg-opacity-20 h-full p-4 hover:bg-opacity-30"
                        whileHover={{ scale: 1.1 }}>
                            <ProjectCard 
                                details={projectDetails}
                            />
                    </div> 
                )}


            </div>

        </div>
    )
}


export default Projects;