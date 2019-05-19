import React, { Component } from "react";
import './footer.css';

export class Footer extends Component {
    render() {
        return <div className="Current-year">© {(new Date().getFullYear())} Fake News Detector</div>;
    }
};