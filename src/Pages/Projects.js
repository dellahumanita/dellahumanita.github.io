import React from "react";

function Projects() {
        return (
            <div className="flex flex-col h-screen justify-center m-auto items-center gap-y-4">
                <h1 className="text-7xl md:text-8xl text-left">Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full p-5 h-1/2">
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden bg-opacity-20 h-full md:h-2/3 p-4 hover:bg-opacity-30">
                        <h2>LifePlus</h2>
                        <p className="py-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. </p>

                        <div></div>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden bg-opacity-20 h-full md:h-2/3 p-4 hover:bg-opacity-30">
                        <h2>Ada's Team Website</h2>
                        <p className="py-3">
                            Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.
                        </p>
                    </div>
                    <div className="bg-white shadow-xl rounded-lg overflow-hidden bg-opacity-20 h-full md:h-2/3 p-4 hover:bg-opacity-30">
                        <h2>Pocketbook</h2>
                        <p className="py-3">
                            Morbi in sem quis dui placerat ornare. Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
                        </p>
                    </div>


                </div>

            </div>
        )
}


export default Projects;