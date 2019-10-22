import React, { Component } from 'react';
import './App.css';
import Counter from "./components/Counter";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      mount:true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent:false,
    };
    this.mount = () =>{ this.setState({ mount:true })};
    this.unmount = () =>{ this.setState({ mount:false})};
    this.ignoreProp = () =>{ this.setState({ ignoreProp:Math.random()})};
    this.seedGenerator = () =>{ this.setState( {seed: Number.parseInt(Math.random() * 100) })};
    this.toggleError = () =>{ this.setState({showErrorComponent:!this.state.showErrorComponent} )};
  }
  render() {
    return (
      <div className="App">
        <header className="app-header">
         <button
            className="app-button"
            onClick={this.mount}
            disabled={this.state.mount} >
           {'Mount'}
         </button>
         <button
            className="app-button"
             onClick={this.unmount}
             disabled={ !this.state.mount}>
           {'UnMount'}
         </button>
         <button
             className="app-button"
             onClick={this.ignoreProp}
             disabled={ !this.state.mount}
             >
           {'Ignore Prop'}
         </button>
         <button
             className="app-button"
             onClick={this.seedGenerator}
             disabled={ !this.state.mount}
             >
           { 'Generated Seed'}
         </button>
         <button
             className="app-button"
             onClick={this.toggleError}
             disabled={ !this.state.mount}
             >
           { 'Toggle Error'}
          </button>
        </header>
        { this.state.mount? <Counter
          ignoreProp={this.state.ignoreProp}
          seed={this.state.seed }
          showErrorComponent={this.state.showErrorComponent}/>:null}
      </div>
    );
  }
}

export default App;
