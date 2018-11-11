import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/Logo";
import ImageLink from "./components/ImageLinkForm/imageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={{ particlesOptions }} className="particles" />
        <Navigation />
        <Logo />
        <ImageLink />
        <Rank />
        {/* { <FaceRecognition/>} */}
      </div>
    );
  }
}

export default App;
