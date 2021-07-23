import React from "react";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import "./app.css";
import YouTubeIcon from "@material-ui/icons/YouTube";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";

function App() {
  return (
    <div>
      <Navbar />
      <div className="main1">
        <div id="textMain1">
          <h1>
            Measuring
            <br />
            everything
          </h1>
        </div>
        <div>
          <img
            className="imgMain1"
            src="./assets/img/fita2.png"
            width="550px"
            alt="fita2"
          />
        </div>
      </div>
      <div className="main2">
        <div id="textMain2">
          <h1>
            We are Leader
            <br />
            in Measure Tap
          </h1>
          <h2>
            There are 5x the
            <br />
            circumference of planet
            <br />
            earth in metric tapes.
          </h2>
        </div>
        <div>
          <img
            className="imgMain2"
            src="./assets/img/fita3remove.png"
            alt="fita3"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default App;
