import { Button, Card, Image } from 'semantic-ui-react'
import { Item } from 'semantic-ui-react'

function UserConcertCard({concert1, concert2, concert3, concert4, concert5, loggedFan_id, fanName}) {
   
    



console.log(concert1)



    const description1 = [
    `You're going to ${concert1.venue} on ${concert1.date}',
        'Artist name performs at ${concert1.location}!`,
      ].join(' ')

      const description2 = [
        `You're going to ${concert2.venue} on ${concert2.date}',
            'Artist name performs at ${concert2.location}!`,
          ].join(' ')

          const description3 = [
            `You're going to ${concert3.venue} on ${concert3.date}',
                'Artist name performs at ${concert3.location}!`,
              ].join(' ')

              const description4 = [
                `You're going to ${concert4.venue} on ${concert4.date}',
                    'Artist name performs at ${concert4.location}!`,
                  ].join(' ')

                  const description5 = [
                    `You're going to ${concert5.venue} on ${concert5.date}',
                        'Artist name performs at ${concert1.location}!`,
                      ].join(' ')
                




    
            
return (



        
  <Item.Group>
    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Item.Content>
        <Item.Header as='a'>Concert #{concert1.id}</Item.Header>
        <Item.Description>
          <p>{description1}</p>
          <p>Price: {concert1.price}</p>
         </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Item.Content>
        <Item.Header as='a'>Concert #{concert2.id}</Item.Header>
        <Item.Description>
          <p>{description2}</p>
          <p>Price: {concert2.price}</p>
         </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Item.Content>
        <Item.Header as='a'>Concert #{concert3.id}</Item.Header>
        <Item.Description>
          <p>{description3}</p>
          <p>Price: {concert3.price}</p>
         </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Item.Content>
        <Item.Header as='a'>Concert #{concert4.id}</Item.Header>
        <Item.Description>
          <p>{description4}</p>
          <p>Price: {concert4.price}</p>
         </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Item.Content>
        <Item.Header as='a'>Concert #{concert5.id}</Item.Header>
        <Item.Description>
          <p>{description5}</p>
          <p>Price: {concert5.price}</p>
         </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
 
)

    }

export default UserConcertCard;
