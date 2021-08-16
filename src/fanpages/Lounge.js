import Header from "../Header";
import FanCard from "./FanCard";
import { Button, Card, Image } from 'semantic-ui-react'
import FanConcerts from "./FanConcerts";
import FanArtists from "./FanArtists";
import MainChat from "./MainChat";
import "./lounge.css"


function Lounge({all_fans, getFanObj, displaySelectedFanConcerts, displaySelectedFanArtists, artistFollowerCount, loggedFan_id, fanName, selectFanCard}){

    const renderFanConcerts = displaySelectedFanConcerts.map(concert => {return <FanConcerts concert = {concert} />})
    const renderFanArtists = displaySelectedFanArtists.map(each_artist => {return <FanArtists each_artist = {each_artist} artistFollowerCount = {artistFollowerCount}/>})


    let displayAllFans = all_fans.map(each_fan => {
    return <FanCard all_fans={each_fan} getFanObj = {getFanObj} renderFanConcerts = {renderFanConcerts} renderFanArtists = {renderFanArtists} selectFanCard = {selectFanCard} fanName = {fanName}/>


})  


    return(
        <div className="entire-page">

          
          <Header></Header>
          
            <div className="fans">
            {displayAllFans}
            </div>
            <div className="chat">
                <h1 className="lounge-chat">Lounge Chat</h1>
            <MainChat fanName={fanName} ></MainChat>
            </div>
          
            
        </div>
    )
}

export default Lounge;