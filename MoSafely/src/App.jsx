import React, { useState } from "react";
import logo from "./assets/logo.png";
import menu from "./assets/menu-2.svg";
import user from "./assets/user-circle.svg";
import risk1 from "./assets/risk1.png";
import risk2 from "./assets/risk2.png";
import risk3 from "./assets/risk3.png";
import downarrow from "./assets/chevron-down.svg";
import Conversation from "./components/Conversation";
import ProgressBar from "./components/ProgressBar";
import conversationsData from "./data/conversations.json";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [progressValue, setProgressValue] = useState(0);
  const [messagesState, setMessagesState] = useState({});

  const conversations = conversationsData;
  const totalConversations = conversations.length;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleAgree = (id) => {
    if (!(id in messagesState)) {
      setMessagesState((prevState) => ({
        ...prevState,
        [id]: true,
      }));
      setProgressValue((prevValue) => prevValue + 1);
    } else {
      setMessagesState((prevState) => ({
        ...prevState,
        [id]: true,
      }));
    }
  };

  const handleDisagree = (id) => {
    if (!(id in messagesState)) {
      setMessagesState((prevState) => ({
        ...prevState,
        [id]: false,
      }));
      setProgressValue((prevValue) => prevValue + 1);
    } else {
      setMessagesState((prevState) => ({
        ...prevState,
        [id]: false,
      }));
    }
  };

  return (
    <div>
      <header>
        <div className="header-left">
          <button>
            <img src={menu} className="icon" alt="menu" />
          </button>
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="header-right">
          <button>
            <img
              src="https://via.placeholder.com/50"
              className="profile-pic"
              alt="user"
            />
            <img src={downarrow} className="icon" alt="downarrow" />
          </button>
        </div>
      </header>

      <main>
        <h1>Messages type</h1>
        <div className="tabs">
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            Risk 1
            <img src={risk1} className="tab" alt="menu" />
          </button>
          <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Risk 2
            <img src={risk2} className="tab" alt="menu" />
          </button>
          <button
            className={activeTab === 3 ? "active" : ""}
            onClick={() => handleTabClick(3)}
          >
            Risk 3
            <img src={risk3} className="tab" alt="menu" />
          </button>
        </div>
        <div className="chat-container">
          <div className="conversation-list">
            <p>
              Risky Messages Received{" "}
              <span className="value-spacing">
                {progressValue} / {totalConversations}
              </span>
            </p>
            <ul>
              {conversations
                .filter((conversation) => conversation.riskType === activeTab)
                .map((conversation) => (
                  <li key={conversation.id}>
                    <div
                      className="conversation-item"
                      onClick={() => handleConversationClick(conversation)}
                    >
                      <div className="profile-and-buttons">
                        <div className="profile-info">
                          <img
                            src={conversation.profilePic}
                            alt="Profile"
                            className="profile-pic"
                          />
                          <h3>{conversation.name}</h3>
                        </div>
                        <div className="agree-disagree-buttons">
                          <div className="radio-group">
                            <label className="radio-label">Agree</label>
                            <input
                              type="radio"
                              id={`agree-${conversation.id}`}
                              name={`response-${conversation.id}`}
                              className="radio-button"
                              checked={messagesState[conversation.id] === true}
                              onChange={() => handleAgree(conversation.id)}
                            />
                            <label
                              htmlFor={`agree-${conversation.id}`}
                              className="radio-button-label"
                            ></label>
                          </div>
                          <div className="radio-group">
                            <label className="radio-label">Disagree</label>
                            <input
                              type="radio"
                              id={`disagree-${conversation.id}`}
                              name={`response-${conversation.id}`}
                              className="radio-button"
                              checked={messagesState[conversation.id] === false}
                              onChange={() => handleDisagree(conversation.id)}
                            />
                            <label
                              htmlFor={`disagree-${conversation.id}`}
                              className="radio-button-label"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <p className="risk-message">{conversation.riskMessage}</p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="chat-interface">
            {selectedConversation ? (
              <div>
                <Conversation messages={selectedConversation.messages} />
              </div>
            ) : (
              <p>Select a conversation to view messages</p>
            )}
          </div>
        </div>
      </main>

      <footer>
        <div className="footer-content">
          <p>
            {progressValue} / {totalConversations} Complete
          </p>
          <ProgressBar value={progressValue} total={totalConversations} />
        </div>
        <div className="footer-buttons">
          <button className="footer-button">Previous</button>
          <button className="footer-button">Next</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
