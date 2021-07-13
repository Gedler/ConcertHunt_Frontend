import { Item } from 'semantic-ui-react'
import {useState} from 'react'

function LoggedUserConcertCard({concert, getSelectedLoggedUserConcert, concert_attending_id }){

    const {id, venue, location, date,  price} = concert
    const [isClicked, setIsClicked] = useState(false)
  
   
    const description = [
        `Get back in action at ${venue} on ${date}',
        'Artist name performs at ${location}!`,
      ].join(' ')


      function handleDeleteConcert(e) {
        e.preventDefault()


        setIsClicked(!isClicked)


 

      
        fetch(`http://localhost:3001/attendingconcert/${concert_attending_id}`, {
            method: "DELETE", 
            headers: {"Content-Type": "application/json"},
            //body: JSON.stringify({
                   // fan_id: loggedFan_id, 
                    // concert_id: getConcert_id
            //})
        })
    
        .then(res => res.json())
        .then(info => {
            console.log(info)
            console.log("You've deleted this concert from your list!")
        })

    }






return (
  <div onMouseOver = {() => getSelectedLoggedUserConcert(concert)}>
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
    <button onClick= {handleDeleteConcert}>Delete Concert</button> 
    {isClicked ? <p>This Concert has been deleted from your list!</p>: null }
  </Item.Group>
  </div>
 
)

    }

export default LoggedUserConcertCard; 