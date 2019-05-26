import React, { Component } from "react";
import "./Home.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1><FontAwesomeIcon icon="pencil-alt" />Notable</h1>
          <p>A simple note taking app</p>
        </div>
      </div>
    );
  }
}