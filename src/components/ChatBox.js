import React from 'react'
import styles from './ChatBox.module.css'
import ChatHistory from '../data/ChatHistory';

function ChatBox() {

    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className={styles.chatBoxContainer}>
        <button className={styles.chatButton}
        style={!isOpen? {display:'block'}:{display:"none"}}
        onClick={() => setIsOpen(true)}>
            <i className='fas fa-comments'></i> Chat
        </button>
        <div className={styles.chatBox} style={isOpen? {display:'flex'}:{display:"none"}} >
          <h2 className={styles.title}>Chat</h2>
          <div className={styles.messages}>
            {ChatHistory.map((message, index) => (
                <div key={index} className={message.type === "User" ? styles.userContainer : styles.botContainer}>
                    <span className={styles.user}>{message.type === "User" ? <i className='fas fa-user'></i> : <i className='fas fa-robot'></i>}</span>
                    <div className={message.type === "User" ? styles.userMessage : styles.botMessage}>
                        <span className={styles.text}>{message.text}</span>
                    </div>
                </div>
            ))}
          </div>
          <input type="text" className={styles.input} placeholder="Type your message..." />
          <button className={styles.button}>Send  <i className='fas fa-paper-plane'></i> </button>
        </div>
    </div>
  )
}

export default ChatBox
