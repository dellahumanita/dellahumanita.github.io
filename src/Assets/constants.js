const linkedin = "https://www.linkedin.com/in/dellahumanita/";
const github = "https://github.com/dellahumanita";
const email = "mailto:humanita@ualberta.ca";

const resume = "https://drive.google.com/file/d/14SqqzDkgUOUHshud98JHGWhKgvdLzJMR/view?usp=sharing"

const bio = "My name is Della and I am a recent Computing Science grad from the University of Alberta. I am currently looking for full-time software development roles.\n\nMy curiosity for people and programming has led me to pursue a career in software development that explores the intersection of how technology and people work together. As an advocate for the user, I strive to create software that is intuitive, aesthetic, and accessible to everyone.\n\nIn my free time, I love to explore creative hobbies such as illustration, knitting, and playing guitar."


const projects = {
    "LifePlus": {
        description: "A productivity web app that implements the concept of building small habits. Inspired by James Clear's book, Atomic Habits.",
        techStack: ["Python", "Flask", "JavaScript"],
        github: "https://github.com/dellahumanita/lifeplus"
    },
    "Ada's Team Website": {
        description: "Brand new website to showcase the members, events and information about the student group Ada's Team",
        techStack: ["React", "Firebase"],
        github: "https://github.com/adasdevelopers/adas-team-website",
        demo: "https://adasdevelopers.github.io/adas-team-website/#/"
    },
    "PocketBook": {
        description: "A book sharing Android app where users can share the books they have, and borrow from others.",
        techStack: ["Java", "Firebase"],
        github: "https://github.com/dellahumanita/PocketBook"
    },
    "TikTakToe": {
        description: "A social media app where users can create, edit, share posts, and connect with other users across 3 different servers.", 
        techStack: ["Preact", "Flask", "TypeScript", "Python"],
        github: "https://github.com/giancarlopernudisegura/cmput404",
        demo: "http://tik-tak-toe-cmput404.herokuapp.com/app/login"
    }
}



export { 
    projects,
    bio,
    resume,
    linkedin, 
    github,
    email
};
