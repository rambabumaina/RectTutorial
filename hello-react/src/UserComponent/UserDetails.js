import React, { Component } from 'react'
import axios from 'axios'

class UserDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: [],
            errorMsg:''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ users: response.data })
                console.log(response)
            })
            .catch(error => {
                this.setState({ errorMsg: 'Error retreiving data' })
                console.log(error)
            })

    }

    render() {
        const { users, errorMsg } = this.state
        return (
            <div>
                List of users
            {
                    users.length ?
                        users.map(user => <div key={user.id}>{user.title}</div>) :
                        null
                }
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default UserDetails
