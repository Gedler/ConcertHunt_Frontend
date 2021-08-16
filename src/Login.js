//import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import React, { Component } from 'react'
import loginImg from "./login.svg";
import './App.css';



export default class App extends Component {
    constructor(props) {
      super(props);
    }

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
            password: e.target[1].value,
            location: e.target[2].value,
            pronouns: e.target[3].value,
            image: e.target[4].value

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
   
  <div className= "form1">
  <h1 className = "header">{this.props.header}</h1>
  {this.state.token ? <Link to= "/profile" ><button>Enter Concert Hunt</button></Link>: null}
 
  <form className= "form-login" onSubmit={(e)=> this.handleLogin(e)}>
      <label>Username</label>
      <input name="username" type="text"/>
      <label>Password</label>
      <input name="password" type="text"/>
      <input type="submit" value="Login"/>
  </form> 
  <div classname= "new-user">
  <button onClick = {(e)=> this.setState({isClicked:true})}>New User?</button>
  {this.state.isClicked ?  
  <form className = "register" onSubmit={(e)=> this.handleRegister(e)}>
      <h1 className="register-text">Register</h1>
      <label>Username</label>
      <input name="username" type="text"/>
      <label>Password</label>
      <input name="password" type="text"/>
      <label>Location</label>
      <input name="location" type="text"/>
      <label>Pronouns</label>
      <input name="pronouns" type="text"/>
      <label>Image</label>
      <input name="image" type="text"/>
      <button onClicked = {(e)=> this.setState({isClicked:false})}type="submit">Sign Up</button>
  </form> : null}
  </div>
  {this.state.isRegistered ? <h3>Welcome To Concert Hunt, please login :)</h3> : null}
  <Link to= "/profile" ><button>Enter Concert Hunt</button></Link>
  </div>

    


)

}
}









