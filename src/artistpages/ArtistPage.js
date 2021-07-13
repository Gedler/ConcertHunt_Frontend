
import Header from "../Header";
import ArtistCard from "./ArtistCard";
import ArtistConcertCard from "./ArtistConcertCard";

function ArtistPage({all_artists, getArtistObj, artistFollowers, artistFollowerCount, selectArtistCard, loggedFan_id, artistConcerts}){


    let concert = artistConcerts.map(concert=> {
       return <ArtistConcertCard concert = {concert} /> })

    console.log(concert)

    let displayAllArtists = all_artists.map(each_artist=> {
        return <ArtistCard getArtistObj = {getArtistObj} each_artist={each_artist} artistFollowers = {artistFollowers} artistFollowerCount = {artistFollowerCount}  selectArtistCard = { selectArtistCard} loggedFan_id = {loggedFan_id}  artistConcerts={artistConcerts} concert = {concert}/>
    
    })

    

        
  
    
    
return(
            <div>
                <Header></Header>
                {displayAllArtists}
            </div>
        )
    }


export default ArtistPage;