import Header from "../Header";
import AttendNewConcert from "./AttendNewConcert";
import ConcertCard from "./ConcertCard";
import { useState } from "react";
import './main.css'

function Main ({concerts, fanName, loggedFan_id, id, fans, attending_concerts, grabConcertObj, attendance, selectConcertCard, selectConcerCardInfo, concert_page_artist_name}){


const displayAllConcerts = concerts.map(concert => {
        return <ConcertCard concerts = {concert} fanName = {fanName} loggedFan_id = {loggedFan_id} fans = {fans} attending_concerts={attending_concerts} grabConcertObj = {grabConcertObj} attendance={attendance} selectConcertCard={selectConcertCard} selectConcerCardInfo={selectConcerCardInfo} concert_page_artist_name={concert_page_artist_name}/>
})


return (
    
        <div>
            
            <Header></Header>
            

            <div  className= "concerts" >
                <h1 className="sub-header">Available Concerts</h1>
         {displayAllConcerts}
         </div>

        </div>
    )
}


export default Main;