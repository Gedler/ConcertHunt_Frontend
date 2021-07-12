import Header from "../Header";
import AttendNewConcert from "./AttendNewConcert";
import ConcertCard from "./ConcertCard";
import { useState } from "react";

function Main ({concerts, fanName, loggedFan_id, id, fans, attending_concerts}){


const displayAllConcerts = concerts.map(concert => {
        return <ConcertCard concerts = {concert} fanName = {fanName} loggedFan_id = {loggedFan_id} fans = {fans} attending_concerts={attending_concerts}/>
})


return (
        <div>
            <Header></Header>
         {displayAllConcerts}
         <AttendNewConcert loggedFan_id = {loggedFan_id}></AttendNewConcert>

        </div>
    )
}


export default Main;