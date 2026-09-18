import { useState } from "react";
import "./Task7.css";

function Task7() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSend = () => {
    if (message.trim() === "") {
      return;
    }

    setMessages([...messages, message]);
    setMessage("");
  };

  return (
    <div className="task7">
      <div className="chat-container">

        <div className="chat-header">
          <h1>Mini Chat</h1>
        </div>

        <div className="messages-section">
          {messages.length === 0 ? (
            <div className="welcome-message">
              <h2>Hi, Welcome to Chat!</h2>
              <p>Your sent messages will appear here.</p>
            </div>
          ) : (
            <div className="message-list">
              {messages.map((msg, index) => (
                <div className="message" key={index}>
                  {msg}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="chat-input">
          <label>Type a message</label>

          <input
            type="text"
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button onClick={handleSend}>
            Send Message
          </button>
        </div>

      </div>
    </div>
  );
}

export default Task7;