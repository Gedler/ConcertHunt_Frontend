import { Button, Card, Image } from 'semantic-ui-react'
import { Item } from 'semantic-ui-react'
import { useState } from "react";

function UserConcertCard({concert1, concert2, concert3, concert4, concert5, attending_concerts, loggedFan_id, fanName}) {
  


                
let value1 = ""

let value2 = ""
let value3 = ""
let value4 = ""
let value5 = ""

value1 = attending_concerts[0]
value2 = attending_concerts[1]
value3 = attending_concerts[2]
value4 = attending_concerts[3] 
value5 = attending_concerts[4]



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
          <p>{concert2.price}</p>
          <p>Delete Code: {value1.id}</p>
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
          <p>Delete Code: {value2.id}</p>
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
          <p>Delete Code: {value3.id}</p>
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
          <p>Delete Code: {value4.id}</p>
         </Item.Description>
      </Item.Content>
    </Item>
    <Item>
      <Item.Image size='small' src='https://react.semantic-ui.com/images/wireframe/image.png' />
        <Item.Content>
        <Item.Header as='a'>Concert #{concert5.id}</Item.Header>
        <Item.Description>
          <p>{description5}</p>
          <p>{concert5.price}</p>
          <p>Delete Code: {value5.id}</p>
         </Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
 
)

    }

export default UserConcertCard;
