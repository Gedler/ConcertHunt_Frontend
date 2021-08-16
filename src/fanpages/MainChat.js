import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import { Button, Comment, Form } from 'semantic-ui-react'


const ChatListDiv = styled.div` 
    height: 300px;
    overflow: auto;
    border-radius: 6px;
    background-color: whitesmoke;
    `

function MainChat({loggedFan_id, fanName}){

    
    const [userInput, setuserInput] = useState("")
    const [chat, setChat] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:3001/chats`)
            .then(res => res.json())
            .then(function(displayChat){

            setChat(displayChat)
            })
    }, )



    function sendNewChat(e){ 
        e.preventDefault();
        let newChatSubmit = {
            fan_name: fanName,
            comment: userInput
        
        }
        console.log(newChatSubmit)
        fetch("http://localhost:3001/chat/new", {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(newChatSubmit)
        })
        .then(res => res.json()) 
        .then(function(newChat){
            console.log(newChat)
        setChat([...chat, newChat])
        })
        setuserInput("")  
    }

    function deleteComment(e) {
        const id = e.target.name

        fetch(`http://localhost:3001/chats/${id}`, {
            method: "DELETE",
        })

        const filteredComments = chat.filter(comment => {
            return comment.id !== parseInt(id)
        })

        setChat(filteredComments)  

    }

    const chatList = chat.map(function(comments){
        
        return ( 

            <div className="top-chat">

            <Comment key= {comments.id}>
                <Comment.Content>
                    <Comment.Text>{comments.fan_name}:{comments.comment}</Comment.Text>
                    <Button onClick={ deleteComment } name={ comments.id } labelPosition="right">X</Button>
                </Comment.Content>
            </Comment>
            </div>
        )
    })
    return ( 
        <Comment.Group>
            <ChatListDiv>
                {chatList}
            </ChatListDiv>
        
            <Form reply onSubmit= {sendNewChat}>
                <Form.TextArea as='textarea' placeholder="Join Chat" value={userInput} onChange= {e=>setuserInput(e.target.value)}/>
                <Button content="add chat"/>
            </Form>
        </Comment.Group>
    )
}


export default MainChat;
