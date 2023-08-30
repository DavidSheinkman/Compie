import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./PictureInfo.module.css";
import { AiOutlineSend } from "react-icons/ai";

const PictureInfo = () => {
  const { id } = useParams();
  const [picture, setPicture] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => setPicture(data))
      .catch((error) => console.error("Error fetching picture:", error));
  }, [id]);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setNewMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className={styles.container}>
      {picture ? (
        <>
          <div className={styles.leftcontainer}>
            <div className={styles.info}>
              <h2 className={styles.title}>
                {picture.title} <span className={styles.artist}>By {picture.artist}</span>{" "}
              </h2>
              <p></p>
            </div>
            <img src={picture.url} alt={picture.title} className={styles.picture} />
          </div>
          <div className={styles.rightcontainer}>
            <div className={styles.chatContainer}>
              <div className={styles.chatMessages}>
                {messages.map((message, index) => (
                  <div key={index} className={styles.chatMessage}>
                    <span className={styles.chatUser}>anonymous user:</span> {message}
                  </div>
                ))}
              </div>
              <div className={styles.chatInput}>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                />
                <button onClick={handleSendMessage} ><AiOutlineSend /></button>
                
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading picture...</p>
      )}
    </div>
  );
};

export default PictureInfo;
