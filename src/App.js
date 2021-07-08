import './App.css';
import Login from "./fanpages/Login"
import { useHistory } from 'react-router-dom';
import React, { Component } from 'react'
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import Profile from './fanpages/Profile';
import Main from './concertpages/Main';
import Lounge from './fanpages/Lounge';
import ArtistPage from './artistpages/ArtistPage';


export default class App extends Component {
  
 
  state = {

    loggedFan_id: "", 
    fanName: "",
    all_fans: [],
    concerts: [], 
    all_artists: [],
    current_user_concerts: [],
    attending_concerts: [],
    followers: [],
    token: false, 

  }



  
  componentDidMount(){

    let id = ""
   

    fetch("http://localhost:3001/concerts", {
      method: "GET",
      headers: {Authorization: `Bearer ${localStorage.token}`}
    })
    .then(res => res.json())
    .then(concerts => {
      this.setState({
        concerts: concerts
      })
  })

  fetch("http://localhost:3001/fans", {
    method: "GET",
    headers: {Authorization: `Bearer ${localStorage.token}`}
  })
  .then(res => res.json())
  .then(all_fans => {
    this.setState({
      all_fans: all_fans
    })
  })


  fetch("http://localhost:3001/artists", {
    method: "GET",
    headers: {Authorization: `Bearer ${localStorage.token}`}
  })
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

  this.finishLogin = (userInfo, user_id) => {
    console.log(userInfo)
    let id = user_id
    console.log(id)
    this.setState({
      
      fanName: userInfo.fan, //any state I put here will update its value once the function been called.
                            //but if I send the states down as a prob from here, it always has a value of undefined.
      
    })
     console.log(userInfo)
  
  }

  console.log(id)
  
  this.localToken = (obj)=>{ //this isn't updating the token at all. The token state stays at its default value

    if (localStorage.length === 2){
      this.setState({
        loggedFan_id: obj.id, 
        token: !this.state.token
      })
    }
  }

  const getUserId = this.state.all_fans.filter(fan => fan.user === this.state.fanName)
  console.log(getUserId)



// getUserConcerts = () => {
//   const getUserFromAllUsers = this.state.all_fans.find(fan => {
//                 fan.user === this.state.currentFan
//                 console.log(getUserFromAllUsers)
//     })

//     const getUserAttendingConcerts = this.state.attending_concerts.filter(attending => 
//             attending.fan_id === getUserFromAllUsers.id)
//             console.log(getUserAttendingConcerts)
    

//     const getUserConcertts = this.state.concerts.filter(concert => 
//           concert.attending_concerts.id === getUserAttendingConcerts)
//           console.log(getUserConcerts)
    
//     this.setState({
//       current_user_concerts: getUserConcertts
//     })
//   }
  


this.getUserProducts = () => {
  const currentFans = this.state.all_fans.find(fan => fan.user===this.state.currentFan)
  const userProducts = this.state.attending_concerts.filter(concerts => concerts.fan_id === currentFans.id)
  
this.setState({
    current_user_concerts: userProducts
  })
}

  
  }
  





  
 






  




  

  render() {

  
  return (
    <div className="App">
<BrowserRouter>
<Switch>
        <Route path="/profile">
              <Profile loggedFan_id = {this.state.loggedFan_id} attending_concerts= {this.state.attending_concerts}

                        
                          >
              </Profile>
        </Route>

        <Route path="/main">
          <Main concerts = {this.state.concerts} fanName = {this.state.fanName} loggedFan_id = {this.state.loggedFan_id} id= {this.id}
                fans = {this.state.all_fans} attending_concerts={this.state.attending_concerts}
            
            
            
            
            >

          </Main>
        </Route>

        <Route path="/lounge">
          <Lounge all_fans = {this.state.all_fans}></Lounge>
        </Route>

        <Route path="/artists">
          <ArtistPage all_artists = {this.state.all_artists}></ArtistPage>
        </Route>
        
            
        
        
        
        
        
        
        <Route path="/">
                <Login finishLogin={this.finishLogin}
                      token={this.state.token}
                      loggedInFan={this.state.currentFan}
                    userInfo={this.getUserProducts}
                    localToken={this.localToken}>
      </Login>
      </Route>
</Switch>
</BrowserRouter>
    </div>
  )
}
}




