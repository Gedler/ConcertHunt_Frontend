import Header from "../Header";
import FanCard from "./FanCard";
import { Button, Card, Image } from 'semantic-ui-react'
import FanConcerts from "./FanConcerts";
import FanArtists from "./FanArtists";


function Lounge({all_fans, getFanObj, displaySelectedFanConcerts, displaySelectedFanArtists, artistFollowerCount}){

    const renderFanConcerts = displaySelectedFanConcerts.map(concert => {return <FanConcerts concert = {concert} />})
    const renderFanArtists = displaySelectedFanArtists.map(each_artist => {return <FanArtists each_artist = {each_artist} artistFollowerCount = {artistFollowerCount}/>})


    let displayAllFans = all_fans.map(each_fan => {
    return <FanCard all_fans={each_fan} getFanObj = {getFanObj} renderFanConcerts = {renderFanConcerts} renderFanArtists = {renderFanArtists}/>


})


    return(
        <div>
            <Header></Header>
            {displayAllFans}
        </div>
    )
}

export default Lounge;