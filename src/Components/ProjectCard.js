import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function ProjectCard( { details } ) {
    library.add(fab, fas);

    const name = details.name;
    const description = details.description;
    const github = details.github;
    const demo = details.demo;
    const techStack = details.techStack;


    return ( 
        <div>
            <motion.div className="flex flex-row justify-between pb-2">
                <h2 className="font-semibold text-2xl hover:italic">
                    {name}
                </h2>
                <span className="flex flex-row gap-x-3">

                    <a className="hover:text-dark" 
                        href={github}
                    >
                        <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                    </a>

                    {demo && 
                        <a className="hover:text-dark" 
                            href={demo}
                        >
                            <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="lg" />
                        </a>
                    }
                </span>

            </motion.div>

            <p className="py-3">{description}</p>

            <ul className="flex flex-row flex-wrap gap-4 pt-5">
                {techStack.map((tech, i) => 
                    <li key={i}>{tech}</li>
                )}
            </ul>
        </div>
    
    );
}