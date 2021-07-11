import Header from "../Header";
import ArtistCard from "./ArtistCard";

function ArtistPage({all_artists, getArtistObj, artistFollowers, artistFollowerCount, selectArtistCard, loggedFan_id}){

    let displayAllArtists = all_artists.map(each_artist=> {
        return <ArtistCard getArtistObj = {getArtistObj} each_artist={each_artist} artistFollowers = {artistFollowers} artistFollowerCount = {artistFollowerCount}  selectArtistCard = { selectArtistCard} loggedFan_id = {loggedFan_id} />
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        return(
            <div>
                <Header></Header>
                {displayAllArtists}
            </div>
        )
    }


    export default ArtistPage;