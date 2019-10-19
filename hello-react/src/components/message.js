import React, { Component } from 'react'


class Message extends Component {

    constructor(){
        super()
        this.state ={
            Message : 'Hi React'
        }
    
    }

    changeMessage(){
        this.setState(
            {
                Message : ' Welcome to the React world'
            }
        )
    }
    render() {
        return(
        <div>   
            <h1> {this.state.Message}</h1>
                <button onClick ={() => this.changeMessage()}> Action </button>
        </div>
        )
    }

}

export default Message;