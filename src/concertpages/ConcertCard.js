import { Item } from 'semantic-ui-react'
import { Button, Icon,  Modal } from 'semantic-ui-react'
import { useState } from "react";
import AttendNewConcert from './AttendNewConcert';
import './main.css'




function ConcertCard({concerts, fanName, currentFan, transferConcertID, grabConcertObj, attendance, selectConcertCard, selectConcerCardInfo, concert_page_artist_name, loggedFan_id}){ 

    const {id, venue, location, date,  price, image, people_attending, fan_usernames, fan_locations, attending_concerts } = concerts

    // findArtist = all_artists.find(artist => artist.id = selectConcerCardInfo.artist_id )
    // getArtistName = findArtist.name 
     

    // concert id 
  
   
    const description = [
        `Get back in action at ${venue} on ${date}'
        '${concert_page_artist_name} performs at ${location}!`,
      ].join(' ')

      const [firstOpen, setFirstOpen] = useState(false)
      const [secondOpen, setSecondOpen] = useState(false)
    


     

return (
  <div className = "card-page" onMouseOver = {() => grabConcertObj(concerts)}>
<Item.Group>
  <div className="each-card">
    <Item>
      <Item.Image size='small' className= "image" src={image} />

      <Item.Content>

        <div className= "concert-id">
        <Item.Header as='a'>Concert #{id}</Item.Header>
        </div>
        
        <Item.Description>
          <p>Venue: {venue}</p>
          <p>Location: {location}</p>
          <p>Date: {date}</p>
          <p>
            Price: {price}
          </p>
        </Item.Description>
      </Item.Content>
    </Item>
    </div>
    <div className= "more-info">
    <Button  onClick={() => setFirstOpen(true)}>More Info</Button>
    </div>

<Modal
  onClose={() => setFirstOpen(false)}
  onOpen={() => setFirstOpen(true)}
  open={firstOpen}
>
  <Modal.Header>Attendance</Modal.Header>
  <Modal.Content image>
    <div className='image'>
      <Icon name='right arrow' />
    </div>
    <Modal.Description>
      <p> There are {attendance} people going to this concert!</p>
    </Modal.Description>
  </Modal.Content>
  <Modal.Actions>
    <Button onClick={() => setSecondOpen(true)} primary>
      Proceed <Icon name='right chevron' />
    </Button>
  </Modal.Actions>

  <Modal
    onClose={() => setSecondOpen(false)}
    open={secondOpen}
    size='large'
  >
    <Modal.Header>Would you like to go to this concert?</Modal.Header>
    <Modal.Content>
      <AttendNewConcert selectConcertCard={selectConcertCard} loggedFan_id={loggedFan_id} ></AttendNewConcert>
    </Modal.Content>
    <Modal.Actions>
      <Button
        icon='check'
        content='All Done'
        onClick={() => setSecondOpen(false)}
      />
    </Modal.Actions>
  </Modal>
</Modal>
  </Item.Group>
  </div>
 
)

    }
  
export default ConcertCard;