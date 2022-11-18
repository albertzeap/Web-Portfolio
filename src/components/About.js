import React from "react";

export const About = () => {
    return(
        <>
            <section className="hero is-primary">
                <div className="hero-body">
                    <div className="container has-text-centered">
                            <h1 className="title is-uppercase">About me</h1>
                    </div>
                </div>
            </section>
            <div className="container">

                <div className="columns">
                    <div className="column is-one-third">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" alt="profile"/>
                        </figure>
                    </div>
                    <div className="column is-one-third">
                        <h1 className="title is-4 has-text-centered">Biography</h1>
                        <p>
                            Knowing how to write a paragraph is incredibly important. It’s a basic aspect of writing, and it is something 
                            that everyone should know how to do. There is a specific structure that you have to follow when you’re writing 
                            a paragraph. This structure helps make it easier for the reader to understand what is going on. Through writing 
                            good paragraphs, a person can communicate a lot bett
                        </p>
                    </div>
                    <div className="column is-one-third has-text-centered">
                        <h1 className="title is-4">Hobbies</h1>
                        <ul>
                            <li>write code</li>
                            <li>write code</li>
                            <li>write code</li>
                        </ul>
                    </div>
                </div>
            </div>
              
        </>
    );

}