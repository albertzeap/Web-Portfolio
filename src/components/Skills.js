import React, { useEffect } from "react";
import { SkillCard } from "./SkillCard";
import AOS from "aos";
import "aos/dist/aos.css";


const SkillColumn1 = [
    {
        language: "C++/C",
        skill: "Advanced",
        time: "4",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
    },
    {
        language: "Python",
        skill: "Intermediate",
        time: "3",
        image: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
    }
   
];
const SkillColumn2 = [
    {
        language: "JavaScript",
        skill: "Intermediate",
        time: "2",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
    },
    {
        language: "HTML/CSS",
        skill: "Intermediate",
        time: "2",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/10/CSS3_and_HTML5_logos_and_wordmarks.svg"
    }
   
];
const TechColumn1 = [
    {
        language: "React",
        skill: "Intermediate",
        time: "2",
        image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        language: "Bootstrap",
        skill: "Beginner",
        time: "1",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg",
    },
    {
        language: "MongoDB",
        skill: "Beginner",
        time: "1",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg"
    }
   
];
const TechColumn2 = [
    {
        language: "NodeJS",
        skill: "Beginner",
        time: "1",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    },
    {
        language: "Firebase",
        skill: "Beginner",
        time: "1",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png"
    },
    {
        language: "Next.js",
        skill: "Beginner",
        time: "1",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/41/Next.js_Logotype_Light_Background.svg"
    }
   
];


export const Skills = () => {   

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <>
            <section className="hero is-medium is-primary" id="Skills">
                <div className="hero-body">
                    <div className="container has-text-centered">
                            <h1 className="title is-2 is-uppercase">Skills</h1>
                    </div>
                </div>
            </section>
            <section className="section mt-6">
                <h1 className="title is-4 is-uppercase has-text-centered pb-3">Soft Skills</h1>               
                <div className="container ">
                    <div className="content is-flex is-justify-content-space-evenly is-flex-wrap-wrap">
                        <p className="tag is-primary is-medium">Hard Working</p>
                        <p className="tag is-primary is-medium">Detail-oriented</p>
                        <p className="tag is-primary is-medium">Self-starter</p>
                        <p className="tag is-primary is-medium">Fast Learner</p>
                        <p className="tag is-primary is-medium">Team Player</p>
                        <p className="tag is-primary is-medium">Problem-solving</p>
                    </div>
                </div>
            </section>
            <section className="section is-small" data-aos="fade-zoom-in" data-aos-easing="ease-in-sine" data-aos-duration="500">
                <div className="columns pb-5" data-aos="slide-up" data-aos-duration= "600">
                        <div className="column is-half has-border-black">
                            <h1 className="title is-4 has-text-centered is-uppercase pb-4">Languages</h1>
                            <div className="columns">
                                <div className="column is-half">
                                    {SkillColumn1.map(({language, skill, time, image})=>{
                                        return(
                                            <div key={language}>
                                                <SkillCard name={language} skill={skill} time={time} image={image}/>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="column is-half" >
                                    {SkillColumn2.map(({language, skill, time, image})=>{
                                        return(
                                            <div key={language}>
                                                <SkillCard name={language} skill={skill} time={time} image={image}/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="column is-half ">
                            <h1 className="title is-4 has-text-centered is-uppercase pb-4">Technologies</h1>
                            <div className="columns">
                                <div className="column is-half ">
                                    {TechColumn1.map(({language, skill, time, image})=>{
                                        return(
                                            <div key={language}>
                                                <SkillCard name={language} skill={skill} time={time} image={image}/>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="column is-half">
                                    {TechColumn2.map(({language, skill, time, image})=>{
                                        return(
                                            <div key={language}>
                                                <SkillCard name={language} skill={skill} time={time} image={image}/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                </div>
            </section>
        </>
    );
    
};