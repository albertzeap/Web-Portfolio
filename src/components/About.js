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
                    <div className="column is-one-third has-text-centered">
                        <h1 className="title is-4 has-text-centered">Biography</h1>
                        <br/>
                        <p className="subtitle is-5">
                            Knowing how to write a paragraph is incredibly important. It’s a basic aspect of writing, and it is something 
                            that everyone should know how to do. There is a specific structure that you have to follow when you’re writing 
                            a paragraph. This structure helps make it easier for the reader to understand what is going on. Through writing 
                            good paragraphs, a person can communicate a lot bett
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