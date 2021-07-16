import React from 'react';
import ErrorBoundary from '../ErrorBoundary';


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', textArea: '', selectValue: 'grapefruit', summaryValue: 'Please input your data!' };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({summaryValue: 'My name is ' + this.state.value + ' . ' + this.state.textArea + ' My favorite flavor is ' + this.state.selectValue + '.'});
  }

  render() {
    console.log(this.state)

    return <ErrorBoundary>

      <div>
      <form onSubmit={this.handleSubmit}>
        <p><label>
          Name:
          <input type="text" name="value" value={this.state.value} onChange={this.handleInputChange} />
        </label></p>
        <p>
          <label>
            About me:
            <textarea name="textArea" value={this.state.textArea} onChange={this.handleInputChange} />
          </label>
        </p>
        <p>
          <label>
            My favorite flavor:
            <select name="selectValue" value={this.state.selectValue} onChange={this.handleInputChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
        </p>
        <input type="submit" value="Submit" />
        <p>{this.state.summaryValue}</p>
      </form>
    </div>
 
    </ErrorBoundary>
  }
}

export default NameForm;