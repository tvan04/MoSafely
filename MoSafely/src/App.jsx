import React, { useState } from "react";
import logo from "./assets/logo.png";
import menu from "./assets/menu-2.svg";
import user from "./assets/user-circle.svg";
import downarrow from "./assets/chevron-down.svg";
import Conversation from "./components/Conversation";
import "./App.css";

function App() {
    const [activeTab, setActiveTab] = useState("tab1");
    const [selectedConversation, setSelectedConversation] = useState(null);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleConversationClick = (conversationId) => {
        setSelectedConversation(conversations.find((conv) => conv.id === conversationId));
    };

    const conversations = [
        {
            id: "conversation1",
            name: "John",
            messages: [
                { sender: "John", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: false },
                { sender: "Me", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "send", flag: true },
                { sender: "John", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: false },
            ],
        },
        {
            id: "conversation2",
            name: "Alice",
            messages: [
                { sender: "Alice", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: false },
                { sender: "Me", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "send", flag: false },
                { sender: "Alice", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: true },
            ],
        },
        {
            id: "conversation3",
            name: "Bob",
            messages: [
                { sender: "Bob", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: false },
                { sender: "Me", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "send", flag: false },
                { sender: "Bob", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,", type: "receive", flag: true },
            ],
        },
    ];

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
                        Tab 1
                    </button>
                    <button
                        className={activeTab === "tab2" ? "active" : ""}
                        onClick={() => handleTabClick("tab2")}
                    >
                        Tab 2
                    </button>
                    <button
                        className={activeTab === "tab3" ? "active" : ""}
                        onClick={() => handleTabClick("tab3")}
                    >
                        Tab 3
                    </button>
                </div>
                <div className="tab-content">
                    {activeTab === "tab1" && <p>This is Tab 1 content.</p>}
                    {activeTab === "tab2" && <p>This is Tab 2 content.</p>}
                    {activeTab === "tab3" && <p>This is Tab 3 content.</p>}
                </div>
                <div className="chat-container">
                    <div className="conversation-list">
                        <h2>Conversations</h2>
                        <ul>
                            {conversations.map((conversation) => (
                                <li key={conversation.id}>
                                    <button onClick={() => handleConversationClick(conversation.id)}>
                                        {conversation.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="chat-interface">
                        {selectedConversation ? (
                            <Conversation messages={selectedConversation.messages} />
                        ) : (
                            <p>Select a conversation to view messages</p>
                        )}
                    </div>
                </div>
            </main>

            <footer>
                <div className="footer-buttons">
                    <button className="footer-button">Previous</button>
                    <button className="footer-button">Next</button>
                </div>
            </footer>
        </div>
    );
}

export default App;
