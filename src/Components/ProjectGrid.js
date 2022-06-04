import React from "react";
import { projects } from "../Assets/constants";
import ProjectCard from "../Components/ProjectCard";

export default function ProjectGrid () {
    return (
        <div id="project-grid" 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full justify-items-stretch">
            {projects.map((projectDetails, i) =>
                <div
                    id={"project-" + i}
                    className="bg-white shadow-xl rounded-lg overflow-hidden bg-opacity-20 h-full p-4 hover:bg-opacity-30"
                    whileHover={{ scale: 1.1 }}>
                    <ProjectCard
                        details={projectDetails}
                    />
                </div>
            )}

        </div>
    );
}