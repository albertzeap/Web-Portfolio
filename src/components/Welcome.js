import React from "react";

export const Welcome = () => {
    return(
        <>  
                <section 
                className="hero is-fullheight-with-navbar is-dark" 
                style={{
                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(https://images.unsplash.com/photo-1632292220916-e9c34dd75db2)',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }} 
                >
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <p className="title is-2 is-uppercase is-spaced">Albert Paez</p>
                            <p className="subtitle is-6 is-italic">Aspiring 
                                <strong className="has-text-primary"> Software Engineer</strong> and  
                                <strong className="has-text-primary"> Web Developer</strong>
                            </p>
                        </div>
                    </div>
                </section>
        </>
    );

};