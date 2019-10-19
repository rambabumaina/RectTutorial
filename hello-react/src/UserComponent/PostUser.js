import React, { Component } from 'react'
import axios from 'axios'

class PostUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             userId : '',
             title :'',
             body : ''
        }
    }

    changeHandler = e =>{
        this.setState({ [e.target.name] : [e.target.value]})
    }
    sumbmitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            console.log(response.data)
        }).catch(error =>{
            console.log('Error in making post call')
        })
    }
    
    render() {
        const {userId, title,body} = this.state
        return (
            <div>
                <form onSubmit = {this.sumbmitHandler}>
                    <div>
                        <input type='text' 
                        name='userId' 
                        placeholder ='userId' 
                        value={userId}
                        onChange = {this.changeHandler}/>
                    </div> 
                   <div>
                        <input type='text' 
                        name ='title' 
                        placeholder ='title' 
                        value={title}
                        onChange = {this.changeHandler}/>
                   </div> 
                   <div>
                        <input type='text' 
                        name ='body' 
                        placeholder ='body' 
                        value={body}
                        onChange = {this.changeHandler}/>
                   </div> 
                   <button> SUBMIT </button> 
                </form>
            </div>
        )
    }
}

export default PostUser
