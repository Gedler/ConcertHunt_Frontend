import AttendNewConcert from "../concertpages/AttendNewConcert";
import Header from "../Header";
import DeleteConcert from "./DeleteConcert";

import { useState } from "react";

import LoggedUserFollowCard from "./LoggedUserFollowCard";
import LoggedUserConcertCard from "./LoggedUserConcertCard";
import ProfileChatBox from "./ProfileChatbox";
import ArtistPage from "../artistpages/ArtistPage";
import "../concertpages/main.css"

function Profile({loggedFan_id, displayLoggedUserConcerts, fanName, attending_concerts, fanFollowers, displayLoggedUserFollowing, displayLoggedUserFollowingID, artistFollowerCount, getSelectedLoggedUserConcert, concert_attending_id }) {
   

let concert1 = {}
let concert2 = {}
let concert3 = {}
let concert4 = {}
let concert5 = {}

let follower1 = {}
let follower2 = {}
let follower3 = {}
let follower4 = {}
let follower5 = {}

let follower1ID = {}
let follower2ID = {}
let follower3ID = {}
let follower4ID = {}
let follower5ID = {}

concert1 = displayLoggedUserConcerts[0]
concert2 = displayLoggedUserConcerts[1]
concert3 = displayLoggedUserConcerts[2]
concert4 = displayLoggedUserConcerts[3]
concert5 = displayLoggedUserConcerts[4]

follower1 = displayLoggedUserFollowing[0]
follower2 = displayLoggedUserFollowing[1]
follower3 = displayLoggedUserFollowing[2]
follower4 = displayLoggedUserFollowing[3]
follower5 = displayLoggedUserFollowing[4]

follower1ID = displayLoggedUserFollowingID[0]
follower2ID = displayLoggedUserFollowingID[1]
follower3ID = displayLoggedUserFollowingID[2]
follower4ID = displayLoggedUserFollowingID[3]
follower5ID = displayLoggedUserFollowingID[4]

const [newFollow, setNewFollow] = useState({})

function updateFollow(new_follow) {
    setNewFollow(new_follow)
}




const shortcut = displayLoggedUserFollowing.map(each_artist => {return <ArtistPage updateFollow={updateFollow} each_artist = {each_artist} artistFollowerCount = {artistFollowerCount}/>}) 
const renderUserFollowing = displayLoggedUserFollowing.map(each_artist => {return <LoggedUserFollowCard each_artist = {each_artist} artistFollowerCount = {artistFollowerCount}/>}) 
const renderUserConcerts = displayLoggedUserConcerts.map(concert => {return <LoggedUserConcertCard concert = {concert} getSelectedLoggedUserConcert = {getSelectedLoggedUserConcert} concert_attending_id = {concert_attending_id}/>})

return (
    <div>
        
        <Header></Header>
        <h4>My Profile</h4>
        <h1>My Concert List</h1>
        <div className="concerts">{renderUserConcerts}</div>
        <h1>My Artist List</h1>
        <div className="artists">
        {renderUserFollowing}
        </div>
        <div className="chat">
        <h1 className="lounge-chat">Your Live Chat</h1>
        <ProfileChatBox loggedFan_id = {loggedFan_id} fanName = {fanName}></ProfileChatBox> 
        </div>
    </div>
)
}




export default Profile;