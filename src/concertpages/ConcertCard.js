import { Item } from 'semantic-ui-react'
import { useState } from "react";
import AttendNewConcert from './AttendNewConcert';

function ConcertCard({concerts, fanName, currentFan, transferConcertID}){

    const {id, venue, location, date,  price, people_attending, fan_usernames, fan_locations, attending_concerts } = concerts
    const [concert_id, setConcert_id] = useState("")
   
    const description = [
        `Get back in action at ${venue} on ${date}',
        'Artist name performs at ${location}!`,
      ].join(' ')





    
            
return (



        
  <Item.Group>
    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header as='a'>Concert #{id}</Item.Header>
        <Item.Description>
          <p>{description}</p>
          <p>
            Price: {price}
          </p>
         
        
        </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
 
)

    }

export default ConcertCard;