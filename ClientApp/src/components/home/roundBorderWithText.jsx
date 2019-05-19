import React, { Component } from "react";

export class RoundBorderWithText extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <div
          style={{
            position: "relative",
            border: "1px solid black",
            minHeight: "35vh",
            width: "30vh",
            borderRadius: "25px",
            margin: "30px",
            padding: "20px",
            textAlign: "center",
            backgroundColor: "#e8e8e8"
          }}
        >
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
          <p>{this.props.monthly}</p> <p>{this.props.yearly}</p>
          <button
            className="btn btn-primary rounded"
            style={{
              position: "absolute",
              textAlign: "center",
              bottom: "20px"
            }}
          >
            {this.props.button}
          </button>
        </div>
      </React.Fragment>
    );
  }
}
