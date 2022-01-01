import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";


function Projects() {

    library.add(fab);

        return (
            <div className="flex flex-col h-screen justify-center m-auto gap-4">
                <header className="flex justify-start pb-5">
                    <h1 className="text-7xl md:text-8xl hover:italic">Projects</h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden bg-opacity-20 h-full p-4 hover:bg-opacity-30">
                        <div className="flex flex-row justify-between pb-2">
                            <h2>LifePlus</h2>
                            <span>
                                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                            </span>
                        </div>
                        
                        <p className="py-3">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. 
                        </p>

                        <ul className="flex flex-row flex-wrap gap-4 pt-5">
                            <li>
                                <FontAwesomeIcon icon={['fab', 'python']} size="2x" /> 
                            </li>
                            <li>
                                <FontAwesomeIcon icon={['fab', 'js']} size="2x" />
                            </li>
                            <li>Flask</li>
                        </ul>

                        <div></div>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden bg-opacity-20 h-full p-4 hover:bg-opacity-30">

                        <div className="flex flex-row justify-between pb-2">
                            <h2>Ada's Team Website</h2>
                            <span>
                                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                            </span>
                        </div>
                        
                        <p className="py-3">
                            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                        </p>
                        <ul className="flex flex-row flex-wrap gap-4 pt-5">
                            <li>
                                <FontAwesomeIcon icon={['fab', 'react']} size="2x" />
                            </li>
                            <li>
                                Firebase
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden bg-opacity-20 h-full p-4 hover:bg-opacity-30">
                        <div className="flex flex-row justify-between pb-2">
                            <h2>Pocketbook</h2>
                            <span>
                                <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
                            </span>
                        </div>
                        <p className="py-3">
                            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
                        </p>

                        <ul className="flex flex-row flex-wrap gap-4 pt-5">
                            <li>
                                <FontAwesomeIcon icon={['fab', 'java']} size="2x" />
                            </li>
                            <li>
                                Firebase
                            </li>
                        </ul>
                    </div>


                </div>

            </div>
        )
}


export default Projects;