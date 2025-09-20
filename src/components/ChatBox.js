import React, { useEffect, useRef } from 'react';
import styles from './ChatBox.module.css';
import ProjectData from '../data/projectsData';
import CertificationsData from '../data/CertificationsData';
import ServicesData from '../data/ServicesData';
import Skills from '../data/Skills';
import { main } from '../API/GEMINI';

const projectsText = JSON.stringify(ProjectData, null, 2);
const certificationsText = JSON.stringify(CertificationsData, null, 2);
const servicesText = JSON.stringify(ServicesData, null, 2);
const skillsText = JSON.stringify(Skills, null, 2);

function ChatBox() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState('');
  const [chatHistory, setChatHistory] = React.useState([
    {
      type: 'Response',
      text: 'Hello, how can I assist you today?',
    },
  ]);
  const messagesContainerRef = useRef(null);

  // Scroll to bottom when chatHistory changes
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const generatePrompt = (question) => `
    You are a portfolio assistant for Muhammad Awais.

    Projects:
    ${projectsText}

    Certifications:
    ${certificationsText}

    Services:
    ${servicesText}

    Skills:
    ${skillsText}

    chat history:
    ${chatHistory.map(msg => `${msg.type}: ${msg.text}`).join('\n')}

    Question: ${question}

    Instructions: Be concise and to the point.
    never fabricate information and don't start the answer with "As an AI language model...","Based on the provided data",.
  `;

  const handleSendMessage = async () => {

    const msg = messages;
    setMessages('');

    if (msg.trim() === '') return;

    // Add user message to history
    const newUserMessage = { type: 'User', text: msg };
    setChatHistory((prev) => [...prev, newUserMessage]);

    // Add loading message
    setChatHistory((prev) => [...prev, { type: 'Response', text: 'Loading...' }]);

    try {
      const response = await main(generatePrompt(msg));
      
      // Remove loading message and add actual response
      setChatHistory((prev) => {
        const newHistory = prev.filter((msg) => msg.text !== 'Loading...');
        return [...newHistory, { type: 'Response', text: response }];
      });
    } catch (error) {
      // Handle error case
      setChatHistory((prev) => {
        const newHistory = prev.filter((msg) => msg.text !== 'Loading...');
        return [...newHistory, { type: 'Response', text: 'Sorry, an error occurred. Please try again!' }];
      });
    }

  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={styles.chatBoxContainer}>
      <button
        className={styles.chatButton}
        style={{ display: isOpen ? 'none' : 'block' }}
        onClick={() => setIsOpen(true)}
      >
        <i className="fas fa-comments"></i> Chat
      </button>
      <div className={styles.chatBox} style={{ height: isOpen ? '400px' : '0px', display: isOpen ? 'flex' : 'none' }}>
        <div>
          <i className={`${styles.closeButton} fas fa-close`} onClick={() => setIsOpen(false)}></i>
          <h2 className={styles.title}>Chat</h2>
        </div>
        <div className={styles.messages} ref={messagesContainerRef}>
          {chatHistory.map((message, index) => (
            <div
              key={index}
              className={message.type === 'User' ? styles.userContainer : styles.botContainer}
            >
              <span className={styles.user}>
                {message.type === 'User' ? (
                  <i className="fas fa-user"></i>
                ) : (
                  <i className="fas fa-robot"></i>
                )}
              </span>
              <div
                className={message.type === 'User' ? styles.userMessage : styles.botMessage}
              >
                <span className={styles.text}>{message.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.inputContainer}>
          <textarea
            value={messages}
            onChange={(e) => setMessages(e.target.value)}
            onKeyPress={handleKeyPress}
            className={styles.input}
            placeholder="Type your message..."
          />
          <button onClick={handleSendMessage} className={styles.button}>
            Send <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;