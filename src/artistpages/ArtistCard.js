import { Card, Icon, Image } from 'semantic-ui-react'
import ConcertCard from "../concertpages/ConcertCard";
import {useState} from "react";

function ArtistCard({each_artist, getArtistObj, artistFollowers, artistFollowerCount,  selectArtistCard, loggedFan_id}){



    const {id, name, location, concerts} = each_artist
    const [getid, setGetid] = useState("")


    //followers.find(follower => follower.fan_id  === loggedFan_id && follower.artist_id === selectArtistCard)

   



function handleFollow(e) {
    fetch("http://localhost:3001/follower/new", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
              artist_id: selectArtistCard, 
              fan_id: loggedFan_id
      })

    })

    .then(res => res.json())
    .then(info => {
      console.log(info)
      console.log("You're now following this artist!")
    })
}

function handleUnFollow(e) {
  fetch("http://localhost:3001/follower/new", {
    method: "DELETE",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
            artist_id: selectArtistCard, 
            fan_id: loggedFan_id
    })

  })

  .then(res => res.json())
  .then(info => {
    console.log(info)
    console.log("You're now following this artist!")
  })
}






 




    return (


<div onMouseOver = {() => getArtistObj(each_artist)}>
  <Card className = "card" >
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
       Hometown: {location}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends {artistFollowerCount}
        <button onClick = {handleUnFollow}>UnFollow</button>
     
      </a>

      <button onClick = {(e)=> handleFollow(e)}   >Follow</button>
    </Card.Content>
  </Card>
  </div>
)


    
}

export default ArtistCard;