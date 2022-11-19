import React from "react";
import { SkillCard } from "./SkillCard";

const SkillColumn1 = [
    {
        language: "C++/C",
        skill: "Advanced",
        time: "4"
    },
    {
        language: "Python",
        skill: "Intermediate",
        time: "3"
    }
   
];
const SkillColumn2 = [
    {
        language: "JavaScript",
        skill: "Intermediate",
        time: "2"
    },
    {
        language: "HTML/CSS",
        skill: "Intermediate",
        time: "2"
    }
   
];
const TechColumn1 = [
    {
        language: "React",
        skill: "Intermediate",
        time: "2"
    },
    {
        language: "Bootstrap",
        skill: "Beginner",
        time: "1"
    },
    {
        language: "MongoDB",
        skill: "Beginner",
        time: "1"
    }
   
];
const TechColumn2 = [
    {
        language: "NodeJS",
        skill: "Beginner",
        time: "1"
    },
    {
        language: "Firebase",
        skill: "Beginner",
        time: "1"
    },
    {
        language: "Next.js",
        skill: "Beginner",
        time: "1"
    }
   
];



export const Skills = () => {
    return(
        <>
            <section className="hero is-primary" id="Skills">
                <div className="hero-body">
                    <div className="container has-text-centered">
                            <h1 className="title is-uppercase">Skills</h1>
                    </div>
                </div>
            </section>
            <section className="section is-medium">
                <div className="columns">
                        <div className="column is-half ">
                            <h1 className="title is-4 has-text-centered">Languages</h1>
                            <div className="columns">
                                <div className="column is-half ">
                                    {SkillColumn1.map(({language, skill, time})=>{
                                        return(
                                            <div key={language}>
                                                <SkillCard name={language} skill={skill} time={time}/>
                                            </div>
                                        );
                                    })}
                                    {/* <SkillCard name={"C++/C"} time={"4"} skill={"Advanced"}/>
                                    <SkillCard name={"Python"} time={"3"} skill={"Intermediate"}/> */}
                                </div>
                                <div className="column is-half">
                                    {SkillColumn2.map(({language, skill, time})=>{
                                        return(
                                            <div key={language}>
                                                <SkillCard name={language} skill={skill} time={time}/>
                                            </div>
                                        );
                                    })}
                                    {/* <SkillCard name={"JavaScript"} time={"2"} skill={"Intermediate"}/>
                                    <SkillCard name={"HTML/CSS"} time={"2"} skill={"Intermediate"}/> */}
                                </div>
                            </div>
                        </div>
                        <div className="column is-half ">
                            <h1 className="title is-4 has-text-centered">Technologies</h1>
                            <div className="columns">
                                <div className="column is-half ">
                                    {TechColumn1.map(({language, skill, time})=>{
                                        return(
                                            <div key={language}>
                                                <SkillCard name={language} skill={skill} time={time}/>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="column is-half">
                                    {TechColumn2.map(({language, skill, time})=>{
                                        return(
                                            <div key={language}>
                                                <SkillCard name={language} skill={skill} time={time}/>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                </div>
                <div className="content has-text-centered">
                    <h1 className="title is-4">Soft Skills</h1>
                    <ul>
                        <li>Hard working</li>
                        <li>Detail-oriented</li>
                        <li>Self-starter</li>
                        <li>Fast learner</li>
                    </ul>
                </div>
            </section>
        </>
    );
    
};