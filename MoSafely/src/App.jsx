import React, { useState } from "react";
import logo from "./assets/logo.png";
import menu from "./assets/menu-2.svg";
import user from "./assets/user-circle.svg";
import downarrow from "./assets/chevron-down.svg";
import Conversation from "./components/Conversation";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("tab1");
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [progressValue, setProgressValue] = useState(0);

  const conversations = [
    {
      id: "conversation1",
      name: "John",
      profilePic: "https://via.placeholder.com/50",
      riskMessage: "This is a risky message from John.",
      messages: [
        { sender: "John", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: false },
        { sender: "Me", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "send", flag: true },
        { sender: "John", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: false },
      ],
    },
    {
      id: "conversation2",
      name: "Alice",
      profilePic: "https://via.placeholder.com/50",
      riskMessage: "This is a risky message from Alice.",
      messages: [
        { sender: "Alice", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: false },
        { sender: "Me", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "send", flag: false },
        { sender: "Alice", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: true },
      ],
    },
    {
      id: "conversation3",
      name: "Bob",
      profilePic: "https://via.placeholder.com/50",
      riskMessage: "This is a risky message from Bob.",
      messages: [
        { sender: "Bob", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: false },
        { sender: "Me", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "send", flag: false },
        { sender: "Bob", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: true },
      ],
    },
  ];

  const totalConversations = conversations.length;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleAgree = () => {
    setProgressValue(progressValue + 1);
  };

  const handleDisagree = () => {
    setProgressValue(progressValue + 1);
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
            <img src={user} className="icon" alt="user" />
            <img src={downarrow} className="icon" alt="downarrow" />
          </button>
        </div>
      </header>

      <main>
        <h1>Messages type</h1>
        <div className="tabs">
          <button
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => handleTabClick("tab1")}
          >
            Risk 1
          </button>
          <button
            className={activeTab === "tab2" ? "active" : ""}
            onClick={() => handleTabClick("tab2")}
          >
            Risk 2
          </button>
          <button
            className={activeTab === "tab3" ? "active" : ""}
            onClick={() => handleTabClick("tab3")}
          >
            Risk 3
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "tab1" && <p>This is Risk 1 content.</p>}
          {activeTab === "tab2" && <p>This is Risk 2 content.</p>}
          {activeTab === "tab3" && <p>This is Risk 3 content.</p>}
        </div>
        <div className="chat-container">
          <div className="conversation-list">
            <h2>Risky Messages Received</h2>
            <ul>
              {conversations.map((conversation) => (
                <li key={conversation.id}>
                  <div
                    className="conversation-item"
                    onClick={() => handleConversationClick(conversation)}
                  >
                    <img src={conversation.profilePic} alt="Profile" className="profile-pic" />
                    <div className="conversation-details">
                      <h3>{conversation.name}</h3>
                      <p className="risk-message">{conversation.riskMessage}</p>
                    </div>
                    <div className="agree-disagree-buttons">
                      <button onClick={handleAgree}>Agree</button>
                      <button onClick={handleDisagree}>Disagree</button>
                    </div>
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
        <ProgressBar value={progressValue} total={totalConversations} />
        <div className="footer-buttons">
          <button className="footer-button">Previous</button>
          <button className="footer-button">Next</button>
        </div>
      </footer>
    </div>
  );
}

export default App;