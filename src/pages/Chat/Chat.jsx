import React, { useEffect, useState, useRef } from 'react'
import './Chat.css'
import {userChats} from '../../services/chatService.js'
import {io} from 'socket.io-client'
import Conversation from '../../components/Conversation/Conversation'
import Message from '../../components/Message/Message'
import './Chat.css'
import { DateTime } from 'luxon'

const Chat = (props) => {
  const [chats, setChats] = useState([])
  const [currentChat, setCurrentChat] = useState(null)
  const [onlineProfiles, setOnlineProfiles] = useState([])
  const [sendMessage, setSendMessage] = useState(null)
  const [receiveMessage, setReceiveMessage] = useState(null)

  const socket = useRef()

  useEffect(() => {
    socket.current = io(process.env.REACT_APP_BACK_END_SERVER_URL)
    if (props.profile._id) {
      socket.current.emit("new-profile-add", props.profile._id)
    }
    socket.current.on('get-profiles', (profiles) => {
      setOnlineProfiles(profiles)
    })
    socket.current.on("receive-message", (data) => {
      console.log("Data received in parent Chat.jsx", data)
      data.createdAt = DateTime.now().toISO()
      setReceiveMessage(data)
    })
  }, [props.profile._id])
  
  useEffect(() => {
    if(sendMessage !== null){
      console.log(sendMessage)
      socket.current.emit('send-message', sendMessage)
    }
    console.log(socket.current.id);
  }, [sendMessage])

  useEffect(() => {
    return () => {
      socket.current.disconnect()
    }
  }, [])

  useEffect(() => {
    const getChats = async() => {
      try {
        const data = await userChats(props.profile._id)
        console.log(data)
        setChats(data)
      } catch (error) {
        console.log(error)
      }
    }
    if (props.profile._id) {
      getChats()
    }
  }, [props.profile._id])
  return (
    <div className="Chat">
      <div className="Left-side-chat">
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat, idx) => (
              <div key={chat._id} onClick={() => setCurrentChat(chat)}>
                <Conversation key={idx} chat={chat} currentUserId={props.profile._id} profiles={props.profiles}/>

              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="Right-side-chat">
        
        <Message chat={currentChat} currentUserId={props.profile._id} profiles={props.profiles} setSendMessage={setSendMessage} receiveMessage={receiveMessage} handleDeleteChat={props.handleDeleteChat} />
      </div>
    </div>

  )
}

export default Chat