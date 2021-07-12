import AttendNewConcert from "../concertpages/AttendNewConcert";
import Header from "../Header";
import DeleteConcert from "./DeleteConcert";
import UserConcertCard from "./UserConcertCard";
import { useState } from "react";
import Followers from "./Followers";

function Profile({loggedFan_id, displayLoggedUserConcerts, fanName, attending_concerts, fanFollowers, displayLoggedUserFollowing, displayLoggedUserFollowingID}) {
   

     
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

return (
    <div>
        
        <Header></Header>
        <h1>My Profile</h1>
        <AttendNewConcert loggedFan_id = {loggedFan_id}></AttendNewConcert>
        <DeleteConcert loggedFan_id = {loggedFan_id} attending_concerts={attending_concerts} displayLoggedUserConcerts = {displayLoggedUserConcerts} attending_concerts = {attending_concerts}></DeleteConcert>
        <h1>My Concert List</h1>
        <UserConcertCard concert1 = {concert1} attending_concerts={attending_concerts} concert2 = {concert2} concert3 = {concert3} concert4 = {concert4} concert5 = {concert5} fanName = {fanName} loggedFan_id = {loggedFan_id}/>
        <Followers follower1 = {follower1} follower2 = {follower2} follower3 = {follower3} follower4 = {follower4} follower5 = {follower5} displayLoggedUserFollowingID={displayLoggedUserFollowingID}
        follower1ID = {follower1ID} follower2ID = {follower2ID} follower3ID = {follower3ID} follower4ID = {follower4ID} follower5ID = {follower5ID}/>
       
    
    </div>
)
}




export default Profile;