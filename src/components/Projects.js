import React from "react";
import { ProjectCard } from "./ProjectCard";

// Images for project covers
import githubImage from "../images/githubTimelines.png"
import facebookImage from "../images/FacebookClone.png"
import MERN from "../images/MERNTodo.png"
import basicEcommerce from "../images/basicEcommerce.png"


const ProjectColumn1 = [
    {
        title: "GitHub Timelines",
        description: "Developed with a team, this project allows employers to view a timeline view of a user's repository history.",
        languages: ["JavaScript", "HTML/CSS", "React", "Next.js", "Vercel", "Github API"],
        image: githubImage,
        repository: "https://github.com/Ismael-Barajas/Timelines",
        isLive: true,
        liveLink: "https://timelines-ismael-barajas.vercel.app/"

    },
    {
        title: "Facebook Clone",
        description: "This project uses React and JS in order to create a clone of the famous social media site, Facebook",
        languages: ["Javascript", "HTML/CSS", "React Context", "Material UI", "Firebase"],
        image: facebookImage,
        repository: "https://github.com/albertzeap/Facebook-Clone",
        isLive: true,
        liveLink: "https://facebook-clone-5a055.web.app/"
    },
];
const ProjectColumn2 = [
    {
        title: "Superior Threads",
        description: "A basic ecommerce site with React, using React Context for state management, and featuring authentication and cart management.",
        languages: ["Javascript", "React", "React Context", "JSON server", "HTML/CSS"],
        image: basicEcommerce,
        repository: "https://github.com/albertzeap/basic-ecommerce",
        isLive: false,
        liveLink: ""

    },
    {
        title: "Cipher Machine",
        description: "A simple console program that allows users to encrypt or decrypt messages using basic ciphers",
        languages: ["C++"],
        image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87",
        repository: "https://github.com/albertzeap/CPSC452-CipherMachine",
        isLive: false,
        liveLink: ""

    },
];
const ProjectColumn3 = [
    {
        title: "MERN Todo List",
        description: "This project utilizing the MERN stack to create a basic web application that can perform CRUD operations",
        languages: ["Javascript", "React", "Node.js", "Bootstrap", "Express.js", "MongoDB"],
        image: MERN,
        repository: "https://github.com/albertzeap/MERN-TodoList",
        isLive: false,
        liveLink: ""

    },
];

export const Projects = () => {
    return(
        <div>
            <section className="hero is-primary" id="Projects">
                <div className="hero-body">
                    <div className="container has-text-centered">
                            <h1 className="title is-2 is-uppercase">Projects</h1>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="columns">
                    <div className="column is-one-third">
                        {ProjectColumn1.map(({title, description, languages, image, repository, isLive, liveLink}) => {
                            return (
                                <div key={title}>
                                    <ProjectCard 
                                        name={title} description={description} 
                                        languages={languages} image={image}
                                        repository={repository}
                                        isLive={isLive} liveLink={liveLink}
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <div className="column is-one-third">
                        {ProjectColumn2.map(({title, description, languages, image, repository, isLive, liveLink}) => {
                            return (
                                <div key={title}>
                                    <ProjectCard 
                                        name={title} description={description} 
                                        languages={languages} image={image}
                                        repository={repository}
                                        isLive={isLive} liveLink={liveLink}
                                    />
                                </div>
                            );
                        })} 
                    </div>
                    <div className="column is-one-third">
                        {ProjectColumn3.map(({title, description, languages, image, repository, isLive, liveLink}) => {
                            return (
                                <div key={title}>
                                    <ProjectCard 
                                        name={title} description={description} 
                                        languages={languages} image={image}
                                        repository={repository}
                                        isLive={isLive} liveLink={liveLink}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );

}