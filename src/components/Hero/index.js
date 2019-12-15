import React from "react";

// By extending the React.Component class, Counter inherits functionality from it
class Hero extends React.Component {
    render() {
        return (
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="title">
                            Welcome to the Clicky Game
              </h1>
                        <h2 className="subtitle">
                            The Holiday Edition
              </h2>
                    </div>
                </div>
            </section>
        )
    }
}
export default Hero;