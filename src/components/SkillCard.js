import React from "react";

export const SkillCard = ({name, skill, time, image}) =>{
    return(
        <div className="card mb-5 pt-5">
            <div className="card-image is-flex is-justify-content-center is-align-content-center">
                <figure className="image is-32x32">
                    <img src={`${image}`} alt=" "/>
                </figure>
            </div>
            <div className="card-content has-text-centered">
                <div className="content has-text-weight-semibold">
                    {name}
                </div>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item is-italic has-text-weight-light"><p className="tag">{skill}</p></p>
                <p className="card-footer-item is-italic has-text-weight-light"><p className="tag">{time} Years</p></p>
            </footer>
        </div>
    );

};