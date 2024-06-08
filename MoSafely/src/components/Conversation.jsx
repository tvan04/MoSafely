import React from 'react';
import Message from './Message';

const Conversation = ({ messages }) => {
    return (
        <div>
            {messages.map((msg, index) => (
                <Message
                    key={index}
                    name={msg.sender}
                    message={msg.content}
                    type={msg.type}
                    flag={msg.flag}
                />
            ))}
        </div>
    );
}

export default Conversation;