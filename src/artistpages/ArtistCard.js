import ConcertCard from "../concertpages/ConcertCard";
import {useState} from "react";

function ArtistCard({artists}){



    const {name, location, concerts} = artists
    const [venue, setVenue] = useState("")















    return (
        
        <div>
            <h1>Artist: {name}</h1>
            <h2>Location: {location} </h2>
         
        </div>
        
    )
}

export default ArtistCard;