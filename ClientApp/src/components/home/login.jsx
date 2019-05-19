import React, { Component } from "react";

import "./css/home.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare
} from "@fortawesome/free-brands-svg-icons";

export class Login extends Component {
  state = {};
  render() {
    return (
      <div className="Register">
            <form>
                <div className="form-group">
                    <label for="exampleInput">Login with</label>
                    <FontAwesomeIcon icon={faFacebookSquare} className="Facebook" />
                    <FontAwesomeIcon icon={faTwitterSquare} className="Twitter" />
                </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address or Username</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email or Username"
            />
            <small id="emailHelp" className="form-text text-white">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
