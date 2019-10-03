import React, { Component } from 'react'

export class ConditionalRendring extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isGuestLoggedIn : false
        }
    }
    
    render() {

        return this.state.isGuestLoggedIn ? (<div> Welcome Ram</div>) : (<div> Welcome Guest</div>)
    }
}

export default ConditionalRendring
