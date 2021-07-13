import Header from "../Header";
import FanCard from "./FanCard";
import { Button, Card, Image } from 'semantic-ui-react'
import FanConcerts from "./FanConcerts";
import FanArtists from "./FanArtists";
import ChatBox from "./Chatbox";


function Lounge({all_fans, getFanObj, displaySelectedFanConcerts, displaySelectedFanArtists, artistFollowerCount, loggedFan_id}){

    const renderFanConcerts = displaySelectedFanConcerts.map(concert => {return <FanConcerts concert = {concert} />})
    const renderFanArtists = displaySelectedFanArtists.map(each_artist => {return <FanArtists each_artist = {each_artist} artistFollowerCount = {artistFollowerCount}/>})


    let displayAllFans = all_fans.map(each_fan => {
    return <FanCard all_fans={each_fan} getFanObj = {getFanObj} renderFanConcerts = {renderFanConcerts} renderFanArtists = {renderFanArtists}/>


})


    return(
        <div>
            <Header></Header>
            {displayAllFans}
            <ChatBox loggedFan_id = {loggedFan_id}></ChatBox>
        </div>
    )
}

export default Lounge;