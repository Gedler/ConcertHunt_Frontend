import './App.css';
import Login from "./fanpages/Login"
//import { useHistory } from 'react-router-dom';
import React, { Component } from 'react'
//import {Route, Switch, Link} from 'react-router-dom';


export default class App extends Component {
  
 
  state = {

    currentFan: "", 
    all_fans: [],
    concerts: [], 
    all_artists: {},
    attending_concerts: [],
    followers: [],
    token: false, 

  }

  componentDidMount(){

    fetch("http://localhost:3001/concerts")
    .then(res => res.json())
    .then(concerts => {
      this.setState({
        concerts: concerts
      })
  })

  fetch("http://localhost:3001/fans")
  .then(res => res.json())
  .then(all_fans => {
    this.setState({
      all_fans: all_fans
    })
  })


  fetch("http://localhost:3001/artists")
  .then(res => res.json())
  .then(artists => {
    this.setState({
      all_artists: artists
    })

  })

  fetch("http://localhost:3001/attending_concerts")
  .then(res => res.json())
  .then(attending_concerts => {
    this.setState({
      attending_concerts: attending_concerts
    })
  })

  fetch("http://localhost:3001/followers")
  .then(res => res.json())
  .then(followers => {
    this.setState({
      followers: followers})
  })

  this.finishLogin = (userInfo) => {
    this.setState({
      currentFan: userInfo.fan,
      token: !this.state.token
      
    })
     console.log(userInfo)
      this.localToken(userInfo)
  
  }
  
  this.localToken=(obj)=>{
  console.log("This is the localToken",obj)
  console.log(obj.fan)

    if (localStorage.token !== "undefined" && localStorage.length === 1){
      this.setState({
        fanName: obj.fan
      })
    }
  }
}


  
 






  




  

  render() {

  
  return (
    <div className="App">
      <Login finishLogin={this.finishLogin}>
             token={this.state.token}
             loggedInFan={this.state.currentFan}

      </Login>
    </div>
  )
}
}




