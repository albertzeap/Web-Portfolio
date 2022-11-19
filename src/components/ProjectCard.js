import React from "react";

export const ProjectCard = ({name, description, image, repository, languages}) =>{
    return(
        <div className="card mb-5">
            <div className="card-image">
                <figure className="image is-16by9">
                    <img src={image} alt="project"/>
                </figure>
            </div>
            <div className="card-content has-text-centered">
                <div className="content">
                    <p className="title has-text-weight-bold">{name} </p>
                    <p className="subtitle is-6">{description}</p>
                    <div className="is-flex is-justify-content-space-evenly is-flex-wrap-wrap ">           
                    {languages.map((language, index)=>{
                        return(
                            <p key={index} className="is-italic has-text-weight-light"> | {language} |</p>
                            );
                        })}
                    </div>
                </div>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item">
                    <a className="button" href={repository} target="_blank" rel="noreferrer">Source Code</a>
                </p>
                <p className="card-footer-item">Time: </p>
            </footer>
        </div>
    );

};