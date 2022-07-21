import { useState, useEffect, useRef } from "react";
import { getMessages, addMessage } from "../../services/messageService";
import "./Message.css";
import InputEmoji from "react-input-emoji";

const Message = (props) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll = useRef();

  useEffect(() => {
    if (
      props.receiveMessage !== null &&
      props.receiveMessage.chatId === props.chat._id
    )
      setMessages([...messages, props.receiveMessage]);
  }, [props.receiveMessage]);

  useEffect(() => {
    const userId = props.chat?.members.find((id) => id !== props.currentUserId);
    console.log(props.currentUserId);
    console.log(userId);
    const getUserData = async () => {
      try {
        const data = await props.profiles.find((profile) => {
          return profile._id.toString() === userId;
        });
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [props.chat, props.currentUserId]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages(props.chat._id);
        console.log("&&&&&&&&&&", props.chat._id);
        console.log(data);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (props.chat !== null) fetchMessages();
  }, [props.chat]);

  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: props.currentUserId,
      text: newMessage,
      chatId: props.chat._id,
    };

    try {
      const data = await addMessage(message);
      setMessages([...messages, data]);
      setNewMessage("");
    } catch (error) {
      console.log(error);
    }

    const receiverId = props.chat.members.find(
      (id) => id !== props.currentUserId
    );
    props.setSendMessage({ ...message, receiverId });
  };

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  console.log(messages)
  return (
    <>
      <div className="message-container">
        {props.chat ? (
          <>
            <div className="message-header">{userData?.name}
              <div className="deleteChatBtn">
                <button onClick={() => props.handleDeleteChat(props.chatId)}>Unmatch</button>
              </div>
            </div>
            <div className="message-box">
              <div className="message-body">
                {messages.map((message, idx) => (
                  <div
                    ref={scroll}
                    key={idx}
                    className={
                      message.senderId === props.currentUserId
                        ? "message-own"
                        : "message"
                    }
                  >
                    <span>{message.text}</span>
                    <br />
                    <span>{message.createdAt}</span>
                  </div>
                ))}
              </div>
              <div className="chat-sender">
                <InputEmoji
                  value={newMessage}
                  onChange={handleChange}
                ></InputEmoji>
                <div className="send-button button" onClick={handleSend}>
                  Send
                </div>
              </div>
            </div>
          </>
        ) : (
          <span className="chatbox-empty-message">
            Tap on a Match to start a conversation...
          </span>
        )}
      </div>
    </>
  );
};

export default Message;
