import React from "react";

function Projects() {
        return (
            <div className="flex flex-col h-screen justify-center m-auto items-center gap-y-4">
                <h1 className="text-7xl md:text-8xl text-left">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-5 h-1/2">
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden bg-opacity-20 h-full md:h-1/2 p-4">
                        <h2>LifePlus</h2>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden bg-opacity-20 h-full md:h-1/2 p-4">
                        <h2>Ada's Team Website</h2>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden bg-opacity-20 h-full md:h-1/2 p-4">
                        <h2>Pocketbook</h2>
                    </div>
                    {/* Add NLP projects */}
                    {/* <div className="Project">Grammar Checker</div> */}

                </div>

            </div>
        )
}


export default Projects;