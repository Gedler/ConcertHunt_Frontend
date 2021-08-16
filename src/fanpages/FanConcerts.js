import { Item } from 'semantic-ui-react'

function FanConcerts({concert}){

  // All concerts that the fan is attending

    const {id, venue, location, image, date,  price} = concert
  
   
    const description = [
        `Get back in action at ${venue} on ${date}',
        'Artist name performs at ${location}!`,
      ].join(' ')

return (
<Item.Group>
    <Item>
      <Item.Image size='small' src={image}/>
       <Item.Content>
        <Item.Header as='a'>Concert #{id}</Item.Header>
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
  </Item.Group>
 
)

    }

export default FanConcerts; 