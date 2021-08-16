import { Card, Icon, Image } from 'semantic-ui-react'
import { Button, Modal } from 'semantic-ui-react'
import ConcertCard from "../concertpages/ConcertCard";
import {useState} from "react";

function FanArtists({each_artist,  artistFollowerCount,  selectArtistCard,   concert}){

  //All artists that the fan follows

const {id, name, location, image } = each_artist

return (



  <Card className = "card" >
    <Image src= {image} wrapped ui={false} />
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
        </a>
    </Card.Content>
  </Card>
)

}

export default FanArtists;