import './App.css';
import Login from "./Login"
import { useHistory } from 'react-router-dom';
import React, { Component } from 'react'
import {BrowserRouter,Route, Switch, Link} from 'react-router-dom';
import Profile from './profile/Profile';
import Main from './concertpages/Main';
import Lounge from './fanpages/Lounge';
import ArtistPage from './artistpages/ArtistPage';


export default class App extends Component {
  
 
  state = {

    header: "Concert Hunt",
    loggedFan_id: "", 
    fanName: "",
    all_fans: [],
    concerts: [], 
    all_artists: [],
    current_user_concerts: [],
    attending_concerts: [],
    concert_attending_id: "",
    followers: [],
    token: false, 
    grabIds: {},
    value1: "", 
    value2: "",
    value3: "",
    value4: "",
    value5: "",
  follower1: "",
  follower2: "",
  follower3: "",
  follower4: "",
  follower5: "",
  followID1: "",
  followID2: "",
  followID3: "", 
  followID4: "",
  followID5: "",
  fanFollowers: [],
displayLoggedUserFollowingID: [],
displayLoggedUserConcerts: [],
displayLoggedUserFollowing: [],
selectArtistCard: {},
artistFollowerCount: "",
artistConcerts: [],
selectConcertCard: {},
selectFanCard: {},
concertAttendanceCount: "", 
fanConcert1: "",
fanConcert2: "",
fanConcert3: "",
fanConcert4: "",
fanConcert5: "",
displaySelectedFanConcerts: [], 
fanArtist1: "",
fanArtist2: "",
fanArtist3: "",
fanArtist4: "",
fanArtist5: "",
displaySelectedFanArtists: []




  }

  componentDidMount(){

  
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

this.setState({fanName: userInfo.fan, loggedFan_id: userInfo.id })

const name = this.state.fanName
  




// Get the Object of the User That Logged In.
const fanThatLoggedIn = this.state.all_fans.find((fan) => fan.user===this.state.fanName)
console.log(fanThatLoggedIn)

// Using the User Object to get different values belonging to that user
// AttendingConcert belongs to a fan_id so filter through it 
// Use the filter to access other keys

const userProducts = this.state.attending_concerts.filter((concerts) => concerts.fan_id === fanThatLoggedIn.id)
const getConcertIDs = userProducts.map(concert => concert.concert_id) //this has the id of all concerts


// Connect Fan With Followers
const follower_instance1 = this.state.followers.filter(follower => follower.fan_id  === this.state.loggedFan_id)
const follower_artistIDs = follower_instance1.map(follower => follower.artist_id) 
const fan_followID = follower_instance1.map(follower => follower.id)
const followerartist = this.state.all_artists.find((artist)=> artist.id === follower_artistIDs[0]) // artist tied to fan via followers



this.setState({
  header: `Welcome Back, ${name}`,
  value1: getConcertIDs[0],
  value2: getConcertIDs[1],
  value3: getConcertIDs[2],
  value4: getConcertIDs[3],
  value5: getConcertIDs[4],
  follower1: follower_artistIDs[0], 
  follower2: follower_artistIDs[1],
  follower3: follower_artistIDs[2],
  follower4: follower_artistIDs[3],
  follower5: follower_artistIDs[4],
  followID1: fan_followID[0],
  followID2: fan_followID[1],
  followID3: fan_followID[2],
  followID4: fan_followID[3],
  followID5: fan_followID[4],
  current_user_concerts: userProducts
})

 const renderUserConcert1 = this.state.concerts.filter(concert => concert.id === this.state.value1) 
 const renderUserConcert2 = this.state.concerts.filter(concert => concert.id === this.state.value2) 
 const renderUserConcert3 = this.state.concerts.filter(concert => concert.id === this.state.value3) 
 const renderUserConcert4 = this.state.concerts.filter(concert => concert.id === this.state.value4) 
 const renderUserConcert5 = this.state.concerts.filter(concert => concert.id === this.state.value5) 

 const renderUserFollow1 = this.state.all_artists.filter(artist => artist.id === this.state.follower1) 
 const renderUserFollow2 = this.state.all_artists.filter(artist => artist.id  === this.state.follower2) 
 const renderUserFollow3 = this.state.all_artists.filter(artist => artist.id  === this.state.follower3) 
 const renderUserFollow4 = this.state.all_artists.filter(artist => artist.id  === this.state.follower4) 
 const renderUserFollow5 = this.state.all_artists.filter(artist => artist.id  === this.state.follower5) 

 const renderUserFollowID1 = this.state.followers.filter(follower => follower.id === this.state.followID1) 
 const renderUserFollowID2 = this.state.followers.filter(follower => follower.id === this.state.followID2) 
 const renderUserFollowID3 = this.state.followers.filter(follower => follower.id === this.state.followID3) 
 const renderUserFollowID4 = this.state.followers.filter(follower => follower.id === this.state.followID4) 
 const renderUserFollowID5 = this.state.followers.filter(follower => follower.id === this.state.followID5) 

 this.setState({
  displayLoggedUserConcerts: [...renderUserConcert1, ...renderUserConcert2, ...renderUserConcert3, ...renderUserConcert4, ...renderUserConcert5],
  displayLoggedUserFollowing: [...renderUserFollow1, ...renderUserFollow2, ...renderUserFollow3, ...renderUserFollow4, ...renderUserFollow5], 
  displayLoggedUserFollowingID: [...renderUserFollowID1, ...renderUserFollowID2, ...renderUserFollowID3, ...renderUserFollowID4, ...renderUserFollowID5]})  




  const follower_instance= this.state.followers.filter(follower => follower.fan_id  === this.state.loggedFan_id)
  const getFollowerID = follower_instance.map(follower => follower.id)
  console.log("This is the follower ID", getFollowerID)
  this.setState({
      fanFollowers: follower_instance})
    }

this.localToken = (userInfo)=>{ 
    if (localStorage.length === 2){
      this.setState({
        loggedFan_id: userInfo.id, 
        token: !this.state.token})}
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

      const getArtistConcerts = this.state.concerts.filter((concert)=> concert.artist_id === this.state.selectArtistCard)
      this.setState({artistConcerts: getArtistConcerts})

      
}

this.grabConcertObj = (obj) => {
  this.setState({
        selectConcertCard: obj.id
  })

  const concert_attendance = this.state.attending_concerts.filter((concert)=> concert.concert_id === this.state.selectConcertCard)
  this.setState({concertAttendanceCount: concert_attendance.length})

//let getAttendingConcert = this.state.attending_concerts.find((concert)=> concert.concert_id === this.state.selectConcertCard && concert.fan_id === this.state.loggedFan_id)
//let getAttendingConcertID = getAttendingConcert.id

}


this.getFanObj = (obj) => {
  this.setState({
        selectFanCard: obj.id
  })

const selectedFan = this.state.attending_concerts.filter(concert => concert.fan_id === this.state.selectFanCard)
const selectedFanConcerts = selectedFan.map(concert => concert.concert_id)

this.setState({
  fanConcert1: selectedFanConcerts[0],
  fanConcert2: selectedFanConcerts[1],
  fanConcert3: selectedFanConcerts[2],
  fanConcert4: selectedFanConcerts[3],
  fanConcert5: selectedFanConcerts[4]
})


const renderFanConcert1 = this.state.concerts.filter(concert => concert.id === this.state.fanConcert1)
const renderFanConcert2 = this.state.concerts.filter(concert => concert.id === this.state.fanConcert2)
const renderFanConcert3 = this.state.concerts.filter(concert => concert.id === this.state.fanConcert3)
const renderFanConcert4 = this.state.concerts.filter(concert => concert.id === this.state.fanConcert4)
const renderFanConcert5 = this.state.concerts.filter(concert => concert.id === this.state.fanConcert5)

this.setState({
    displaySelectedFanConcerts: [...renderFanConcert1, ...renderFanConcert2,...renderFanConcert3, ...renderFanConcert4,...renderFanConcert5]})


    const selectedFanFollows = this.state.followers.filter(follower => follower.fan_id  === this.state.selectFanCard)
    const selectedFanArtistIDs = selectedFanFollows.map(follower => follower.artist_id) 

    this.setState({
      fanArtist1: selectedFanArtistIDs[0],
      fanArtist2: selectedFanArtistIDs[1],
      fanArtist3: selectedFanArtistIDs[2],
      fanArtist4: selectedFanArtistIDs[3],
      fanArtist5: selectedFanArtistIDs[4],
})

const renderFanArtist1 = this.state.all_artists.filter(artist => artist.id === this.state.fanArtist1)
const renderFanArtist2 = this.state.all_artists.filter(artist => artist.id === this.state.fanArtist2)
const renderFanArtist3 = this.state.all_artists.filter(artist => artist.id === this.state.fanArtist3)
const renderFanArtist4 = this.state.all_artists.filter(artist => artist.id === this.state.fanArtist4)
const renderFanArtist5 = this.state.all_artists.filter(artist => artist.id === this.state.fanArtist5)


this.setState({
  displaySelectedFanArtists: [...renderFanArtist1, ...renderFanArtist2, ...renderFanArtist3, ...renderFanArtist4, ...renderFanArtist5]
})


}

this.getSelectedLoggedUserConcert = (e)=> {

  let concert_id = e.id

  let getAttendingConcert = this.state.attending_concerts.find((concert)=> concert.concert_id === concert_id && concert.fan_id === this.state.loggedFan_id)
  let getAttendingConcertID = getAttendingConcert.id

  this.setState({
    
    concert_attending_id: getAttendingConcertID
  })

}


    
    
  



  
  }
  render() {

  
  return (
    <div className="App">
<BrowserRouter>
<Switch>
        <Route path="/profile">
              <Profile loggedFan_id = {this.state.loggedFan_id} attending_concerts= {this.state.attending_concerts} displayLoggedUserConcerts = {this.state.displayLoggedUserConcerts} 
                        fanName = {this.state.fanName} attending_concerts={this.state.current_user_concerts} fanFollowers = {this.state.fanFollowers} displayLoggedUserFollowing={this.state.displayLoggedUserFollowing}
                        displayLoggedUserFollowingID={this.state.displayLoggedUserFollowingID} artistFollowerCount= {this.state.artistFollowerCount} getSelectedLoggedUserConcert={this.getSelectedLoggedUserConcert}
                        concert_attending_id = {this.state.concert_attending_id}
                        
                          >
              </Profile>
        </Route>

        <Route path="/main">
          <Main concerts = {this.state.concerts} fanName = {this.state.fanName} loggedFan_id = {this.state.loggedFan_id} id= {this.id}
                fans = {this.state.all_fans} attending_concerts={this.state.attending_concerts} grabConcertObj={this.grabConcertObj}    
                attendance = {this.state.concertAttendanceCount}  selectConcertCard = {this.state.selectConcertCard}     >
                    
          </Main>
        </Route>

        <Route path="/lounge">
          <Lounge all_fans = {this.state.all_fans} getFanObj={this.getFanObj} displaySelectedFanConcerts = {this.state.displaySelectedFanConcerts} displaySelectedFanArtists = {this.state.displaySelectedFanArtists}   artistFollowerCount = {this.state.artistFollowerCount} loggedFan_id = {this.state.loggedFan_id} fanName= {this.state.fanName} selectFanCard={this.state.selectFanCard} ></Lounge>
        </Route>

        <Route path="/artists">
          <ArtistPage all_artists = {this.state.all_artists} getArtistObj = {this.grabArtistObj} artistFollowers = {this.artistFollowers} artistFollowerCount = {this.state.artistFollowerCount}  selectArtistCard = {this.state.selectArtistCard} loggedFan_id = {this.state.loggedFan_id}
                      artistConcerts = {this.state.artistConcerts}
          > </ArtistPage>
        </Route>
        
            
        
        
        
        
        
        
        <Route path="/">
                <Login finishLogin={this.finishLogin}
                      token={this.state.token}
                      loggedInFan={this.state.currentFan}
                    userInfo={this.getUserProducts}
                    localToken={this.localToken}
                    fanName = {this.state.fanName}
                    header= {this.state.header}>
      </Login>
      </Route>
</Switch>
</BrowserRouter>
    </div>
  )
}
}




