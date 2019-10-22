import React, { Component} from 'react';
import TrafficLight, { RED, GREEN, YELLOW} from "./components/TrafficLight";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentColor: RED
    };

    setInterval(() => {
      this.setState({
        currentColor: this.getNextColor(this.state.currentColor)
      });
    }, 1000);
  }

  getNextColor(color) {
    switch (color) {
      case RED:
        return YELLOW;
      case YELLOW:
        return GREEN;
      default:
        return RED;
    }
  }

  render() {
    const { currentColor } = this.state;
    return (
      <div className="App">
        <TrafficLight currentColor={currentColor} />
      </div>
    );
  }
}
export default App;
