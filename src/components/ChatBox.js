import React, { useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
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
    You are a helpful portfolio assistant integrated into a chatbox interface for Muhammad Awais.
    Follow these guidelines strictly when answering:

    1. **Output Format**
       - Always respond in valid Markdown.
       - Support headings, lists, bold, italics, links, and code blocks when relevant.
       - Keep responses clean and professional — no extra fences like \`\`\`html unless it's actual code.

    2. **Chatbox Behavior**
       - The response should be suitable for direct rendering in a styled chatbox.
       - Assume the chatbox has smooth open/close animations using CSS transitions.

    3. **Error Handling**
       - If the user makes a typo, spelling mistake, or vague request, try to infer the intended meaning.
       - Politely clarify if the request is too ambiguous, instead of failing silently.

    4. **Content Quality**
       - Provide concise, structured answers unless detail is explicitly requested.
       - Use Markdown features to improve readability (e.g., bullet points, links, tables).
       - When suggesting resources, provide clickable links.

    5. **Data Integration**
       - Base your answers on the provided portfolio data (projects, certifications, services, skills).
       - If a question is outside the scope of the given data, say:  
         *"I don't have that information in the portfolio data provided."*

    Projects:
    ${projectsText}

    Certifications:
    ${certificationsText}

    Services:
    ${servicesText}

    Skills:
    ${skillsText}

    Chat history:
    ${chatHistory.map(msg => `${msg.type}: ${msg.text}`).join('\n')}

    Question: ${question}
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
      // For demo purposes, use mock response if API is not available
      const mockResponse = `## Available Projects

Here are some of **Muhammad Awais'** key projects:

### Featured Projects
- **FilmFind - Movie Search App**: A *React.js* application that fetches and displays movie and TV show data from TMDB API
  - Technologies: React, JavaScript, API Integration
  - [View Project](https://muhammad-awais-web-dev.github.io/filmfind/)

- **Personal Portfolio**: A responsive portfolio website built with *React.js*
  - Technologies: React, CSS Modules, JavaScript
  - [View Project](https://muhammad-awais-web-dev.github.io/)

- **Freelancer Portfolios Initiative**: Custom portfolios for 5 freelancers across creative fields
  - Technologies: WordPress, Custom Design

### Skills & Certifications
- **Google UX Design Professional Certificate**
- **Meta Front-End Developer Professional Certificate** 
- **Google AI Essentials Professional Certificate**

*Feel free to explore the projects and let me know if you have any questions!*

---
**Note**: This is a demo response with markdown formatting to showcase the enhanced chatbox capabilities.`;

      let response;
      try {
        response = await main(generatePrompt(msg));
      } catch (apiError) {
        // Use mock response when API is not available
        response = mockResponse;
      }
      
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
      <div className={`${styles.chatBox} ${isOpen ? styles.chatBoxOpen : styles.chatBoxClosed}`}>
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
                {message.type === 'User' ? (
                  <span className={styles.text}>{message.text}</span>
                ) : (
                  <div className={styles.text}>
                    <ReactMarkdown>{message.text}</ReactMarkdown>
                  </div>
                )}
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