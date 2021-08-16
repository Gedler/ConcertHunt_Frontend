import { Button, Card, Image, Icon, Modal } from 'semantic-ui-react'
import {useState} from 'react'
import PrivateChatBox from './PrivateChatbox'

function FanCard({all_fans, getFanObj, renderFanConcerts, renderFanArtists, selectFanCard, fanName}) {
    
    const {user, location, image, pronouns} = all_fans

    const [open, setOpen] = useState(false)

return (
        <div onMouseOver = {()=> getFanObj(all_fans)}>
<Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src={image}
        />
        <Card.Header>{user}</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
          {user} is from <strong>{location}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
        <Button basic color='green'>
            {pronouns}
          </Button>
        </div>
      </Card.Content>
    </Card>
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>View Profile</Button>}
    >
      <Modal.Header>{user}'s' Profile</Modal.Header>
      <Modal.Content image scrolling>
        <Image size='medium' src={image} wrapped />

        <Modal.Description>
       
          <h1 >
            {user}'s Concerts:
            </h1>
          
            <div className="concerts">
            <p>
            {renderFanConcerts}
           </p>
           </div>

           <h1>

             {user}'s Artist List:
             </h1>
             
             <p>
             {renderFanArtists}
           </p>
           <h1>{user}'s Live Chat</h1>
           <PrivateChatBox selectFanCard= {selectFanCard} fanName = {fanName}></PrivateChatBox>


          
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)} primary>
          Proceed <Icon name='chevron right' />
        </Button>
      </Modal.Actions>
    </Modal>
  </Card.Group>
  </div>
)
    }


            
export default FanCard;
