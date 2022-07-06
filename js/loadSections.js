// import {
//     projects,
//     bio,
//     resume,
//     linkedin,
//     github,
//     email
// } from "./constants.js";

function loadBio() {
    // Get the element with id of section
    // Create a p element
    // Set the innerHTML
    
    var p = document.createElement("p");
    var bio = document.createTextNode("Hello world");
    p.appendChild(bio);
    var aboutElement = document.getElementById('about');
    aboutElement.appendChild(p);

}
document.onload = function () {
    loadBio();
};