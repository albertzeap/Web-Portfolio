import React from "react";

export const SkillCard = ({name, skill, time}) =>{
    return(
        <div className="card mb-5">
            <div className="card-content has-text-centered">
                <div className="content">
                    {name}
                </div>
            </div>
            <footer className="card-footer">
                <p className="card-footer-item">Skill: {skill}</p>
                <p className="card-footer-item">Time: {time} Years</p>
            </footer>
        </div>
    );

};