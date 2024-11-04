import React, { useState } from 'react';

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const toggleChatBox = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      {!isOpen && (
        <button
          onClick={toggleChatBox}
          className="p-3 text-white bg-blue-500 rounded-full shadow-lg"
        >
          Chat
        </button>
      )}
      {isOpen && (
        <div className="flex flex-col bg-white rounded-lg shadow-lg w-80 h-96">
          <div className="flex items-center justify-between p-4 font-bold text-white bg-blue-500 rounded-t-lg">
            <span>Chat Support</span>
            <button onClick={toggleChatBox} className="text-white">
              X
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 my-2 rounded-lg ${
                  msg.sender === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex p-2 bg-gray-200 rounded-b-lg">
            <input
              type="text"
              className="flex-1 p-2 text-black border rounded-lg"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="p-2 ml-2 text-white bg-blue-500 rounded-lg"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBox;
