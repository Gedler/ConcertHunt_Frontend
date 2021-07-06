function ConcertCard({concerts, artist_concerts}){

    const {venue, location, price, people_attending, fan_usernames, fan_locations } = concerts
    
















    return (
        <div>
            <h1>Venue: {venue} </h1>
            <h2>Location: {location} </h2>
            <h3>Price: {price} </h3>
            <p>There are {people_attending} going to this event!</p>
        </div>
    )
}


export default ConcertCard;