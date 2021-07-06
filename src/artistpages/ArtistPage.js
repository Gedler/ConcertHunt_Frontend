import Header from "../Header";
import ArtistCard from "./ArtistCard";

function ArtistPage({all_artists}){

    let displayAllArtists = all_artists.map(each_artist=> {
        return <ArtistCard artists={each_artist}/>
    
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        return(
            <div>
                <Header></Header>
                {displayAllArtists}
            </div>
        )
    }


    export default ArtistPage;