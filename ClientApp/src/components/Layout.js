import React, { Component } from "react";
import { Container } from "reactstrap";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";


export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
        <div style={{ backgroundColor: '#aaa', height: '100vh', overflow: 'auto'}}>
        <Navbar />
        <Container>
          {this.props.children}
          <Footer />
        </Container>
      </div>
    );
  }
}
