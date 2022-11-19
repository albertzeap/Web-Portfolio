import React from "react";

export const About = () => {
    return(
        <>
            <section className="hero is-primary mb-5" id="About">
                <div className="hero-body">
                    <div className="container has-text-centered">
                            <h1 className="title is-uppercase">About me</h1>
                    </div>
                </div>
            </section>
            <section className="section is-medium" >
                <div className="columns">
                    <div className="column is-one-third">
                        <div className="box has-background-light">
                            <figure className="image is-3by4">
                                <img  className="" src="https://live.staticflickr.com/65535/52311816679_b21d68fb0d_b.jpg" alt="profile"/>
                            </figure>

                        </div>
                    </div>
                    <div className="column is-one-third">
                        <h1 className="title is-4 has-text-centered">Biography</h1>
                        <br/>
                        <p className="subtitle is-5">
                           I am a dedicated software engineer committed to a lifestyle
                           of learning.
                           <br/>
                           <br/>
                           The two main reasons why I love programming/building is because I love learning from obstacles that
                           arise when working on projects and I find purpose in creating applications 
                           that help solve common problems. 
                           <br/>
                           <br/>
                           As a recent computer science graduate from California
                           State University-Fullerton, I aim to hone my skills so that I can 
                           contribute greatly to the tech industry. Furthermore, I am a firm believer that anyone can achieve greatness 
                           as long they have the humility to learn. 
                           <br/>
                           <br/>

                        </p>
                    </div>
                    <div className="column is-one-third has-text-centered">
                        <h1 className="title is-4">Hobbies</h1>
                        <br/>
                        <ul className="subtitle is-5">
                            <li className="mb-5">Drumming</li>
                            <li className="mb-5">Videography</li>
                            <li className="mb-5">Graphic Design</li>
                            <li className="mb-5">Dancing</li>
                        </ul>
                    </div>
                </div>
            </section>
              
        </>
    );

}