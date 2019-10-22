import React, {Component} from 'react';
import  ErrorBoundary  from './ErrorBoundary'

class BuggyCounter extends React.Component {
  render() {
      // Simulate a JS error
      throw new Error('I crashed!');
    return <h1>Miso</h1>;
  }
}
export default class Counter extends Component {
    constructor(props){
      console.log('CONSTRUCTOR');
      super(props);
      this.state = {
        counter:0,
        seed:0,
        initializing:true,
        error:null,
        errorInfo:null,
      };
      this.increment = () =>{ this.setState({ counter: this.state.counter+1 })};
      this.decrement = () =>{ this.setState({ counter: this.state.counter-1 })};
    }

    static getDerivedStateFromProps( props, state){
       if( props.seed && state.seed !== props.seed){

       console.log('Get Derived State From Props');
       console.log('gdsfp-gdsfp-gdsfp-gdsfp-gdsfp-gdsfp-gdsfp');
           return {
              seed: props.seed,
              counter: props.seed,
           }
       }
       return null;
    }

    /*
       capture details before update happens
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
       return null;
    }

  componentDidMount() {
       console.log('Component Did Mount');
       console.log('cdm-cdm-cdm-cdm-cdm-cdm-cdm');
       setTimeout( ()=>{
          this.setState({initializing:false})
       }, 2000)
    }

    /*
     could loos performance if used incorrectly
     */
    shouldComponentUpdate(nextProps, nextState, nextContext) {;
      if (nextProps.ignoreProp && this.props.ignoreProp  !== nextProps.ignoreProp){
         console.log('Should Component Update Do Not Render');
       console.log('sch-NOT-Render-sch-NOT-Render-sch-NOT-Render-');
         return false;
      }
       console.log('Should Component Update DO Render');
       console.log('sch-Do-Render-sch-Do-Render-sch-Do-Render-');
      return true;
    }

 desireAnError = ()=>{
   throw new Error('Somehting is broken inside')
  };

  render() {
      console.log("----RENDER----counter =", this.state.counter);
      console.log("----RENDER----error =", this.state.error);
      if(this.props.showErrorComponent && this.state.error){
          return <div>we have encountered an error:{ this.state.error.message}</div>
      }
      if(this.state.initializing){
         return (<div className="gen-text"> Initializing.... </div>)
      }
      return(
         <div className="container">
          <div className="counter-header">
           <button className="button" onClick={this.increment}>
             {'Increment'}
           </button>
           <button  className="button" onClick={this.decrement} >
             {'Decrement class'}
           </button>
          </div>
              <section>
                 Counter: {this.state.counter}
                { this.props.showErrorComponent &&
                  <ErrorBoundary>
                      <BuggyCounter/>
                   </ErrorBoundary>}
              </section>
         </div>
      )
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
       console.log(' Component Did Update');
       console.log('cdu-cdu-cdu-cdu-cdu-cdu-cdu-cdu')
    }

    componentWillUnmount() {
       console.log('Component Will UNMount');
       console.log('cwum-cwum-cwum-cwum-cwum-cwum-cwum');
    }

  componentDidCatch(error, errorInfo) {
     console.log('Component Did Catch');
     console.log('Component Did Catch error =', error);
     console.log('Component Did Catch errorInfo =', errorInfo);
     console.log('cdc-cdc-cdc-cdc-cdc-cdc-cdc');
     this.setState({error:error, errorInfo:errorInfo});
  }
}
