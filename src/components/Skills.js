import React from "react";

export const Skills = () => {
    return(
        <>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                            <h1 className="title is-uppercase">Skills</h1>
                    </div>
                </div>
            </section>
            <h1 className="title is-4 has-text-centered">Languages</h1>
            <div className="columns">
                    <div className="column is-one-third">
                        <div class="card">
                            <div class="card-content has-text-centered">
                                <div class="content">
                                    C++
                                </div>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">Skill: Advanced</p>
                                <p className="card-footer-item">Time: 4 Years</p>
                            </footer>

                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div class="card">
                            <div class="card-content has-text-centered">
                                <div class="content">
                                    JavaScript
                                </div>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">Skill: Intermediate</p>
                                <p className="card-footer-item">Time: 2 Years</p>
                            </footer>
                        </div>
                    </div>
                    <div className="column is-one-third">
                        <div class="card">
                            <div class="card-content has-text-centered">
                                <div class="content">
                                    Python
                                </div>
                            </div>
                            <footer className="card-footer">
                                <p className="card-footer-item">Skill: Intermediate</p>
                                <p className="card-footer-item">Time: 3 Years</p>
                            </footer>
                        </div>
                    </div>

            </div>
                    <h1 className="title is-4 has-text-centered">Technologies</h1>
                    <div className="columns">
                        <div className="column">1</div>
                        <div className="column">2</div>
                        <div className="column">3</div>
                    </div>                  
                    <h1 className="title is-4 has-text-centered">Soft Skills</h1>
                    <div className="columns">
                        <div className="column">1</div>
                        <div className="column">2</div>
                        <div className="column">3</div>
                    </div>
        </>
    );
    
};