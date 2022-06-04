import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { linkedin, github, email } from "../Assets/constants"

function Contact() {

    library.add(fab, faEnvelope);
    return (
        <div className="flex flex-col items-center justify-center h-screen space-y-7">
            <h1 className="font-serif hover:italic text-7xl md:text-9xl p-5 text-center">Let's chat!</h1>

            <div className="flex flex-row justify-between space-x-8">
                <a className="hover:text-yellow-200"
                    href={github}>
                    <FontAwesomeIcon icon={['fab', 'github']} size="4x" />
                </a>
                <a className="hover:text-yellow-200"
                    href={linkedin}>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} size="4x"/>
                </a>
                <a className="hover:text-yellow-200"
                    href={email}>
                    <FontAwesomeIcon icon={faEnvelope} size="4x" />
                </a>
            </div>
        </div>
    );
}


export default Contact;