import { Card, Icon, Image } from 'semantic-ui-react'
import { Button, Modal } from 'semantic-ui-react'
import ConcertCard from "../concertpages/ConcertCard";
import {useState} from "react";

function ArtistCard({each_artist, getArtistObj, artistFollowers, artistFollowerCount,  selectArtistCard, loggedFan_id, artistConcerts, concert, updateFollow}){

const {id, name, location, image, concerts} = each_artist


const [open, setOpen] = useState(false)
const [isClicked, setIsClicked] = useState(false)

function handleFollow(e) {

  setIsClicked(!isClicked)

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



return (


<div onMouseOver = {() => getArtistObj(each_artist)}>
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
      <button onClick = {(e)=> handleFollow(e)}>Follow</button>
      {isClicked ? <p>You're now following this artist!</p>: null   }

        
    </Card.Content>
  </Card>
  <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>View Profile</Button>}
    >
      <Modal.Header>{name} | Followers: {artistFollowerCount}</Modal.Header>
      <Modal.Content image scrolling>
        <Image size='medium' src= {image} wrapped />

        <Modal.Description>
          
          <h1>Available Concerts:</h1>
          <p>
           {concert}
          </p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  </div>
)


    
}

export default ArtistCard;