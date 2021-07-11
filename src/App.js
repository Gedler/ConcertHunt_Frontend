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
    grabIds: {},
    value1: "", 
    value2: "",
    value3: "",
    value4: "",
    value5: "",
    displayLoggedUserConcerts: [],
    selectArtistCard: {},
    artistFollowerCount: "",
    fanFollowers: []


  }

  componentDidMount(){

    const object1 = {
      a: 'somestring',
      b: 42
    };
    
    for (const [key, value] of Object.entries(object1)) {
      console.log(`${key}: ${value}`);
    }

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
      all_fans: all_fans})
  })

  fetch("http://localhost:3001/artists", {
    method: "GET",
    headers: {Authorization: `Bearer ${localStorage.token}`}
  })
  .then(res => res.json())
  .then(artists => {
    this.setState({
      all_artists: artists})
  })

  fetch("http://localhost:3001/attending_concerts")
  .then(res => res.json())
  .then(attending_concerts => {
    this.setState({
      attending_concerts: attending_concerts})
  })

  fetch("http://localhost:3001/followers")
  .then(res => res.json())
  .then(followers => {
    this.setState({
      followers: followers})
  })

this.finishLogin = (userInfo) => {  

this.setState({fanName: userInfo.fan})
  
const fanThatLoggedIn = this.state.all_fans.find((fan) => fan.user===this.state.fanName)
console.log(fanThatLoggedIn)
const userProducts = this.state.attending_concerts.filter((concerts) => concerts.fan_id === fanThatLoggedIn.id)
const getConcertIDs = userProducts.map(concert => concert.concert_id) //this has the id of all concerts

this.setState({
  value1: getConcertIDs[0],
  value2: getConcertIDs[1],
  value3: getConcertIDs[2],
  value4: getConcertIDs[3],
  value5: getConcertIDs[4],
  current_user_concerts: userProducts
})

 const renderUserConcert1 = this.state.concerts.filter(concert => concert.id === this.state.value1) 
 const renderUserConcert2 = this.state.concerts.filter(concert => concert.id === this.state.value2) 
 const renderUserConcert3 = this.state.concerts.filter(concert => concert.id === this.state.value3) 
 const renderUserConcert4 = this.state.concerts.filter(concert => concert.id === this.state.value4) 
 const renderUserConcert5 = this.state.concerts.filter(concert => concert.id === this.state.value5) 


this.setState({
  displayLoggedUserConcerts: [...renderUserConcert1, ...renderUserConcert2, ...renderUserConcert3, ...renderUserConcert4, ...renderUserConcert5] })  

 

}


this.localToken = (userInfo)=>{ //this isn't updating the token at all. The token state stays at its default value
    if (localStorage.length === 2){
      this.setState({
        loggedFan_id: userInfo.id, 
        token: !this.state.token})
      }
      const follower_instance= this.state.followers.filter(follower => follower.fan_id  === this.state.loggedFan_id)
    // this.setState(follower_instance)

    }

    this.grabArtistObj = (obj) => {
      this.setState({
        selectArtistCard: obj.id
      })
      const selectedArtist = this.state.all_artists.find((artist) => artist.id === this.state.selectArtistCard)
      const artistFollowers = this.state.followers.filter((follower) => follower.artist_id === obj.id)

      this.setState({
        artistFollowerCount: artistFollowers.length
      })
      
      const follower_instance= this.state.followers.filter(follower => follower.fan_id  === this.state.loggedFan_id)
      console.log(follower_instance)



    }


    // const getConcertIDs = userProducts.map(concert => concert.concert_id) //this has the id of all concerts
    
  



  
  }
  render() {

  
  return (
    <div className="App">
<BrowserRouter>
<Switch>
        <Route path="/profile">
              <Profile loggedFan_id = {this.state.loggedFan_id} attending_concerts= {this.state.attending_concerts} displayLoggedUserConcerts = {this.state.displayLoggedUserConcerts} 
                        fanName = {this.state.fanName} attending_concerts={this.state.current_user_concerts} 

                        
                          >
              </Profile>
        </Route>

        <Route path="/main">
          <Main concerts = {this.state.concerts} fanName = {this.state.fanName} loggedFan_id = {this.state.loggedFan_id} id= {this.id}
                fans = {this.state.all_fans} attending_concerts={this.state.attending_concerts}>

          </Main>
        </Route>

        <Route path="/lounge">
          <Lounge all_fans = {this.state.all_fans}></Lounge>
        </Route>

        <Route path="/artists">
          <ArtistPage all_artists = {this.state.all_artists} getArtistObj = {this.grabArtistObj} artistFollowers = {this.artistFollowers} artistFollowerCount = {this.state.artistFollowerCount}  selectArtistCard = {this.state.selectArtistCard} loggedFan_id = {this.state.loggedFan_id}> </ArtistPage>
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




