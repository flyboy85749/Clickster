import React from "react";

import './App.css';
import '../node_modules/bulma/css/bulma.min.css';

// import Hero
import Hero from "./components/Hero";

// import Card 
import Card from "./components/Card";

// import Counter 
import Counter from "./components/Counter";

// import Footer 
import Footer from "./components/Footer";

function App() {
  return (

    <div className="container">
      <Hero />
      <div className="columns">
        <div className="column">
          <Card onClick={this.handleIncrement}/>
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
        <div className="column">
          <Card />
        </div>
      </div>
      <div className="media-content">
        <Counter />
      </div>
      <Footer />
    </div>


  );
}

export default App;
