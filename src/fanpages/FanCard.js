import { Button, Card, Image, Icon, Modal } from 'semantic-ui-react'
import {useState} from 'react'

function FanCard({all_fans, getFanObj, renderFanConcerts, renderFanArtists}) {
    
    const {user, location} = all_fans

    const [open, setOpen] = useState(false)

return (
        <div onMouseOver = {()=> getFanObj(all_fans)}>
<Card.Group>
    <Card>
      <Card.Content>
        <Image
          floated='right'
          size='mini'
          src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
        />
        <Card.Header>{user}</Card.Header>
        <Card.Meta></Card.Meta>
        <Card.Description>
          {user} is from <strong>{location}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
         
        </div>
      </Card.Content>
    </Card>
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={<Button>View Profile</Button>}
    >
      <Modal.Header>Profile Picture</Modal.Header>
      <Modal.Content image scrolling>
        <Image size='medium' src='https://react.semantic-ui.com/images/wireframe/image.png' wrapped />

        <Modal.Description>
          <p>
            {renderFanConcerts}
           </p>
           <p>
             {renderFanArtists}
           </p>

          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image
            src='https://react.semantic-ui.com/images/wireframe/paragraph.png'
            style={{ marginBottom: 10 }}
          />
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
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
