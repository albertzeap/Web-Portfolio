import React from "react";
import { SkillCard } from "./SkillCard";

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
                                    <SkillCard name={"C++/C"} time={"4"} skill={"Advanced"}/>
                                    <SkillCard name={"Python"} time={"3"} skill={"Intermediate"}/>
                                </div>
                                <div className="column is-half">
                                    <SkillCard name={"JavaScript"} time={"2"} skill={"Intermediate"}/>
                                    <SkillCard name={"HTML/CSS"} time={"2"} skill={"Intermediate"}/>
                                </div>
                            </div>
                        </div>
                        <div className="column is-half ">
                            <h1 className="title is-4 has-text-centered">Technologies</h1>
                            <div className="columns">
                                <div className="column is-half ">
                                    <SkillCard name={"React"} time={"2"} skill={"Intermediate"}/>
                                    <SkillCard name={"Bootstrap"} time={"1"} skill={"Beginner"}/>
                                    <SkillCard name={"MongoDB"} time={"1"} skill={"Beginner"}/>
                                </div>
                                <div className="column is-half">
                                    <SkillCard name={"Node.js"} time={"1"} skill={"Beginner"}/>
                                    <SkillCard name={"Firebase"} time={"1"} skill={"Beginner"}/>
                                    <SkillCard name={"Next.js"} time={"1"} skill={"Beginner"}/>
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