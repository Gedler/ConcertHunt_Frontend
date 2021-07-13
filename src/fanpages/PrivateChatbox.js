import React, {useState, useEffect} from "react"
import styled from 'styled-components'
import { Button, Comment, Form } from 'semantic-ui-react'

const ChatListDiv = styled.div` 
    height: 300px;
    overflow: auto;
    border-radius: 6px;
    background-color: whitesmoke;
    `
 
function PrivateChatBox({loggedFan_id, fanName, selectFanCard}){

    
    const [userInput, setuserInput] = useState("")
    const [chat, setChat] = useState([])

    useEffect(()=> {
        fetch(`http://localhost:3001/chatbox`)
            .then(res => res.json())
            .then(function(displayChat){
                let filterChat = displayChat.filter(function(obj){
                    return obj.fan_id === selectFanCard
                })
                setChat(filterChat)
            })
    }, )

    function sendNewChat(e){ 
        e.preventDefault();
        let newChatSubmit = {
            fan_id: selectFanCard,
            comment: userInput,
            fan_name: fanName
        }
        console.log(newChatSubmit)
        fetch("http://localhost:3001/chatbox/new", {
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

        fetch(`http://localhost:3001/chatbox/${id}`, {
            method: "DELETE",
        })

        const filteredComments = chat.filter(comment => {
            return comment.id !== parseInt(id)
        })

        setChat(filteredComments)  //selecartistcard in the db. db should have fanName. 

    }

    const chatList = chat.map(function(comments){
        
        return ( 

            <Comment key= {comments.id}>
                <Comment.Content>
                    <Comment.Text>{comments.fan_name}:{comments.comment}</Comment.Text>
                    <Button onClick={ deleteComment } name={ comments.id } labelPosition="right">X</Button>
                </Comment.Content>
            </Comment>
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


export default PrivateChatBox;
