
import Header from "../Header";
import Profile from "../profile/Profile";
import ArtistCard from "./ArtistCard";
import ArtistConcertCard from "./ArtistConcertCard";
import "./artistpage.css"

function ArtistPage({all_artists, getArtistObj, artistFollowers, artistFollowerCount, selectArtistCard, loggedFan_id, artistConcerts, updateFollow}){


    let concert = artistConcerts.map(concert=> {
       return <ArtistConcertCard concert = {concert} /> })



    let shortCut2Profile = artistConcerts.map(concert=> {
        return <Profile concert = {concert} /> })

    console.log(concert)

    let displayAllArtists = all_artists.map(each_artist=> {
        return <ArtistCard updateFollow={updateFollow} getArtistObj = {getArtistObj} each_artist={each_artist} artistFollowers = {artistFollowers} artistFollowerCount = {artistFollowerCount}  selectArtistCard = { selectArtistCard} loggedFan_id = {loggedFan_id}  artistConcerts={artistConcerts} concert = {concert}/>
    
    })

    

        
  
    
    
return(
            <div className="entire-page">
                
                <Header></Header>
                

               <div className="sub-page">
               
                <h1 className="sub-header">All Artists</h1>
                <div className="artists">
                {displayAllArtists}
                </div>
            </div>
            </div>
        )
    }


export default ArtistPage;