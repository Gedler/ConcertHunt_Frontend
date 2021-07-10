import AttendNewConcert from "../concertpages/AttendNewConcert";
import Header from "../Header";
import DeleteConcert from "./DeleteConcert";
import UserConcertCard from "./UserConcertCard";
import { useState } from "react";

function Profile({loggedFan_id, attending_concerts, displayLoggedUserConcerts, fanName}) {



let concert1 = {}
let concert2 = {}
let concert3 = {}
let concert4 = {}
let concert5 = {}

concert1 = displayLoggedUserConcerts[0]
concert2 = displayLoggedUserConcerts[1]
concert3 = displayLoggedUserConcerts[2]
concert4 = displayLoggedUserConcerts[3]
concert5 = displayLoggedUserConcerts[4]






return (
    <div>
        
        <Header></Header>
        <h1>My Profile</h1>
        <AttendNewConcert loggedFan_id = {loggedFan_id}></AttendNewConcert>
        <DeleteConcert loggedFan_id = {loggedFan_id} attending_concerts={attending_concerts} displayLoggedUserConcerts = {displayLoggedUserConcerts}></DeleteConcert>
        <h1>My Concert List</h1>
        <UserConcertCard concert1 = {concert1} concert2 = {concert2} concert3 = {concert3} concert4 = {concert4} concert5 = {concert5} fanName = {fanName} loggedFan_id = {loggedFan_id}></UserConcertCard> 
       
    
    </div>
)
}




export default Profile;