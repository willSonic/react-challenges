import React, { Component } from "react";
import "./TrafficLight.css";
import classNames from "classnames";

export const RED = 0;
export const YELLOW = 1;
export const GREEN = 2;

class TrafficLight extends Component {

  render() {
  const{currentColor} = this.props;
    return (
      <div className="TrafficLight">
        <div
          className={classNames("light-bulb", "red", {
            active: currentColor === RED
          })}
        />
        <div className={classNames("light-bulb yellow", {
            active: currentColor === YELLOW
          })}
        />

        <div className={classNames("light-bulb green", {
            active: currentColor === GREEN
          })}
        />
      </div>
    );
  }
}
export default TrafficLight;
