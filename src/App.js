import React from "react";
// import Counter from "./components/Counter";
import './App.css';
import '../node_modules/bulma/css/bulma.min.css';


function App() {
  return (
    <div className="App">
      <div className="container">
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
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="images/image_3.jpg" alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">

                  <div className="media-content">
                    <p className="title is-4">Image 1</p>

                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="images/image_4.jpg" alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">

                  <div className="media-content">
                    <p className="title is-4">Image 2</p>

                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="images/image_5.jpg" alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">

                  <div className="media-content">
                    <p className="title is-4">Image 3</p>

                  </div>
                </div>


              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src="images/image_6.jpg" alt="" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">

                  <div className="media-content">
                    <p className="title is-4">Image 4</p>

                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <div className="media-content">
          <p className="title is-4">Counter:</p>

        </div>
      </div>
    </div>

  );
}

export default App;
