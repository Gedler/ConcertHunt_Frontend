import { Card, Icon, Image } from 'semantic-ui-react'
import ConcertCard from "../concertpages/ConcertCard";
import {useState} from "react";

function Followers({follower1, follower2, follower3, follower4, follower5, follower1ID, follower2ID, follower3ID, follower4ID, follower5ID}) { 


function handleUnFollow() {
    

   let id = follower1ID.id

    fetch(`http://localhost:3001/follower/${id}`, {
    method: "DELETE",
    headers: {"Content-Type": "application/json"},


  })

  .then(res => res.json())
  .then(info => {
    console.log(info)
    console.log("You've unfollowed this artist!")
  })

}

function handleUnFollow2() {

    let id2 = follower2ID.id
    
    
     fetch(`http://localhost:3001/follower/${id2}`, {
     method: "DELETE",
     headers: {"Content-Type": "application/json"},
 
 
   })
 
   .then(res => res.json())
   .then(info => {
     console.log(info)
     console.log("You've unfollowed this artist!")
   })
 
 }

 function handleUnFollow3() {

    let id3 = follower3ID.id
    

     fetch(`http://localhost:3001/follower/${id3}`, {
     method: "DELETE",
     headers: {"Content-Type": "application/json"},
 
 
   })
 
   .then(res => res.json())
   .then(info => {
     console.log(info)
     console.log("You've unfollowed this artist!")
   })
 
 }

 function handleUnFollow4() {
    let id4 = follower4ID.id
     fetch(`http://localhost:3001/follower/${id4}`, {
     method: "DELETE",
     headers: {"Content-Type": "application/json"},
 
 
   })
 
   .then(res => res.json())
   .then(info => {
     console.log(info)
     console.log("You've unfollowed this artist!")
   })
 
 }

 function handleUnFollow5(grab) {
    let id5 = follower5ID.id
    console.log(grab)
     fetch(`http://localhost:3001/follower/${id5}`, {
     method: "DELETE",
     headers: {"Content-Type": "application/json"},
 
 
   })
 
   .then(res => res.json())
   .then(info => {
     console.log(info)
     console.log("You've unfollowed this artist!")
   })
 
 }
    
    
    
    
    
    
    
return (


        <div >
          <Card >
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header> {follower1.name}</Card.Header>
              <Card.Meta>Artist ID:{follower1.id}</Card.Meta>
              <Card.Description>
               Hometown: {follower1.location}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Friends
             
              </a>
        
              <button onClick = {handleUnFollow}>UnFollow</button>
            </Card.Content>
          </Card>
          <Card >
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header> {follower2.name}</Card.Header>
              <Card.Meta>Artist ID:{follower2.id} </Card.Meta>
              <Card.Description>
               Hometown: {follower2.location}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Friends 
               
             
              </a>
              <button onClick = {handleUnFollow2}>UnFollow</button>
            </Card.Content>
          </Card>
          <Card >
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header> {follower3.name}</Card.Header>
              <Card.Meta>Artist ID:{follower3.id} </Card.Meta>
              <Card.Description>
               Hometown: {follower3.location}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Friends 
               
             
              </a>
        
              <button onClick = {handleUnFollow3}>UnFollow</button>
            </Card.Content>
          </Card>
          <Card >
            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' wrapped ui={false} />
            <Card.Content>
              <Card.Header> {follower4.name}</Card.Header>
              <Card.Meta>Artist ID:{follower4.id} </Card.Meta>
              <Card.Description>
               Hometown: {follower4.location}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                10 Friends 
        
             
              </a>
        
              <button onClick = {handleUnFollow4}>UnFollow</button>
            </Card.Content>
          </Card>
          </div>

        )

}

export default Followers;
        