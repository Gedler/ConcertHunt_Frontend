//import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class App extends Component {

    state = {
        isClicked: false,
        isRegistered: false
    }




    componentDidMount(){

const name = 

this.handleLogin=(e)=> {
    e.preventDefault()

    

    fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
                },
        body: JSON.stringify({
            user: e.target[0].value,
            password: e.target[1].value
        })
    })
    
    .then(res => res.json())
    .then((userInfo) => {
        let user_id= userInfo.id
          console.log("This is the 2nd .then",userInfo)
    localStorage.token = userInfo.token
    this.props.finishLogin(userInfo, user_id)
    this.props.localToken(userInfo)

    })

   
} 

this.handleRegister=(e)=> {
    e.preventDefault()

    fetch("http://localhost:3001/fan/new", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
                },
        body: JSON.stringify({
            user: e.target[0].value,
            password: e.target[1].value
        })
    })
    
    .then(res => res.json())
    .then((userInfo) => {
        console.log("Welcome to Concert Hunt")

    })

    this.setState({isRegistered:true})
}


   






} 
render() {
return (
    <div>
        <h1>{this.props.header}</h1>
       
        <form onSubmit={(e)=> this.handleLogin(e)}>
            <label>Username</label>
            <input name="username" type="text"/>
            <label>Password</label>
            <input name="password" type="text"/>
            <input type="submit"/>
        </form> 
        <button onClick = {(e)=> this.setState({isClicked:true})}>New User?</button>
        {this.state.isClicked ?  
        <form onSubmit={(e)=> this.handleRegister(e)}>
            <h1>Register</h1>
            <label>Username</label>
            <input name="username" type="text"/>
            <label>Password</label>
            <input name="password" type="text"/>
            <label>Location</label>
            <input name="location" type="text"/>
            <input onClicked = {(e)=> this.setState({isClicked:false})}type="submit"/> 
        </form> : null}
        {this.state.isRegistered ? <h3>Welcome To Concert Hunt, please login :)</h3> : null}
        <Link to= "/profile" ><button>Enter Concert Hunt</button></Link>
        </div>

        
    


)

}
}









