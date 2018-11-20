import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/navigation/navigation";
import Logo from "./components/logo/Logo";
import ImageLink from "./components/ImageLinkForm/imageLinkForm";
import Rank from "./components/Rank/Rank";
import Particles from "react-particles-js";
import FaceRecognitionComp from "./components/faceRecognitionComp/faceRecognition";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "31f86810af4d480a9d76f5f2a655fd3f"
});

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
  constructor() {
    super();
    this.state = {
      input: "",
      imageURL: "",
      box: {}
    };
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace =  data.outputs[0].data.regions[0].region_info.bounding_box;
    // dom manipulation
    const image = document.getElementById("inputImage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(image.width, image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  };

  displayFaceBox = (calculatedBox) => {
    console.log(calculatedBox);
    this.setState({box: calculatedBox})
  }

  onInputChange = event => {
    console.log(event.target.value);
    this.setState({ input: event.target.value });
  };

  onSubmit = () => {
    console.log("click");
    this.setState({ imageURL: this.state.input });

    app.models
      .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        this.displayFaceBox(this.calculateFaceLocation(response));
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div className="App">
        <Particles params={{ particlesOptions }} className="particles" />
        <Navigation />
        <Logo />
        {/* onimput change is passed as a prop */}
        <ImageLink
          onInputChange={this.onInputChange}
          onBtnSubmit={this.onSubmit}
        />
        <Rank />
        <FaceRecognitionComp box={this.state.box} imageURL={this.state.imageURL} />
      </div>
    );
  }
}

export default App;
