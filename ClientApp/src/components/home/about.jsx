import React, { Component } from "react";
import Geolocation from "./geolocation";

export default class About extends Component {
  render() {
    return (
        <React.Fragment>

        <central><h1>About Us</h1></central>
        <Geolocation />
      </React.Fragment>
    );
  }
}
