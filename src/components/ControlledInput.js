import React, {Component} from 'react';

class ControlledForm extends Component {
    state = {
        firstName: "Samantha",
        lastName: "Kang"
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <form>
                    <input type="text" id="firstName" onChange={event => this.handleChange(event)} value={this.state.firstName} />
                    <input type="text" id="lastName" onChange={event => this.handleChange(event)} value={this.state.lastName} />
                </form>
            </div>
        ) 
    }
}

export default ControlledForm