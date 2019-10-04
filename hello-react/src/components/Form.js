import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            Username: ''
        }
    }


    handaleUsernameChange = (event) => {
        this.setState({
            Username: event.target.value
        })
    }

    render() {
        return (
            <div>
                <label> Username </label>
                <input type='text' value={this.state.Username} onChange={this.handaleUsernameChange} />
            </div>
        )
    }
}

export default Form
