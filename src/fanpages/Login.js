//import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import React, { Component } from 'react'

export default class App extends Component {

    componentDidMount(){



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
          console.log("This is the 2nd .then",userInfo)
    localStorage.token = userInfo.token
    this.props.finishLogin(userInfo)

    })
}
}
render() {
return (
    <div>
        <h1>Concert Hunt</h1>
        <form onSubmit={(e)=> this.handleLogin(e)}>
            <label>Username</label>
            <input name="username" type="text"/>
            <label>Password</label>
            <input name="password" type="text"/>
            <input type="submit"/>
        </form>
        <h1></h1>
        <h1></h1>
        <h1></h1>
        <Link to= "/profile" ><button>Enter Concert Hunt</button></Link>
        </div>
    


)

}
}









