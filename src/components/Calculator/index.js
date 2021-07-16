import React from 'react';
import ErrorBoundary from '../ErrorBoundary';

function Mult(props) {
  const number = parseFloat(props.userInput);
  let multiplier = parseFloat(props.mult);
      if (Number.isNaN(number)) {
        return '';
      }
      const result = number * multiplier;
      console.log(result.toString());
      return <p>{number} * {multiplier.toString()} is equal to {result.toString()}</p>;
}

class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {userInput: '', hasError: false};
    }
  
    handleChange(e) {
      try {this.setState({userInput: e.target.value});}
      catch(error){
        console.log(error);
        this.setState({hasError:true});
      }
      
    }
    render() {
      const userInput = this.state.userInput;
      return (
    
        <ErrorBoundary>
     
        <fieldset>
          <legend>Value to be calculated:</legend>
          <input
            value={userInput}
            onChange={this.handleChange} />
            <Mult userInput={userInput} mult={this.props.mult}/>
        </fieldset>
  
        </ErrorBoundary>
      
      );
    }
  }

export default Calculator;