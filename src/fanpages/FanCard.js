import { Button, Card, Image } from 'semantic-ui-react'

function FanCard({all_fans}) {
    
    const {user, location} = all_fans




















    return (
        
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
          <Button basic color='green'>
            Send Friend Request
          </Button>
          <Button basic color='red'>
            View Profile
          </Button>
        </div>
      </Card.Content>
    </Card>
  </Card.Group>
)
    }


            
export default FanCard;
