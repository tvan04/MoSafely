import React from 'react';
import PropTypes from 'prop-types';
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
};

Conversation.propTypes = {
    messages: PropTypes.arrayOf(
        PropTypes.shape({
            sender: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired,
            type: PropTypes.oneOf(['send', 'receive']).isRequired,
            flag: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default Conversation;
