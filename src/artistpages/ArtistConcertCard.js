import { Item } from 'semantic-ui-react'
import { useState } from "react";


function ArtistConcertCard({concert}){

    const {id, venue, location, image, date,  price} = concert
  
   
    const description = [
        `Get back in action at ${venue} on ${date}',
        'Artist name performs at ${location}!`,
      ].join(' ')

return (
<Item.Group>
    <Item>
      <Item.Image size='small' src={image} />

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

export default ArtistConcertCard;