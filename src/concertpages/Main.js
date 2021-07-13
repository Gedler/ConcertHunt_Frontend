import Header from "../Header";
import AttendNewConcert from "./AttendNewConcert";
import ConcertCard from "./ConcertCard";
import { useState } from "react";

function Main ({concerts, fanName, loggedFan_id, id, fans, attending_concerts, grabConcertObj, attendance, selectConcertCard}){


const displayAllConcerts = concerts.map(concert => {
        return <ConcertCard concerts = {concert} fanName = {fanName} loggedFan_id = {loggedFan_id} fans = {fans} attending_concerts={attending_concerts} grabConcertObj = {grabConcertObj} attendance={attendance} selectConcertCard={selectConcertCard}/>
})


return (
        <div>
            <Header></Header>
         {displayAllConcerts}

        </div>
    )
}


export default Main;