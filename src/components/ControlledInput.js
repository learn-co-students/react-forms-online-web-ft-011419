// src/components/ControlledInput.js
import React from 'react';

class ControlledInput extends React.Component {
  state = {
    value: '',
  }
  handleSubmit = event => {
    event.preventDefault()
    this.sendFormDataSomewhere(this.state)
  }
  handleChange = event => {
    this.setState({
      value: event.target.value,
    });
    console.log("1",event.target.value)
    console.log("3",this.state.value)
  }

  render() {
    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default ControlledInput;
