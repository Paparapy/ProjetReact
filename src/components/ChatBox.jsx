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
    <div className="fixed z-50 bottom-4 right-4">
      {!isOpen && (
        <button
          onClick={toggleChatBox}
          className="px-6 py-3 text-white bg-orange-800 rounded-full shadow-lg"
        >
          Chatbox
        </button>
      )}
      {isOpen && (
        <div className="flex flex-col bg-orange-700 rounded-lg shadow-lg w-80 h-96">
          <div className="flex items-center justify-between p-4 font-bold text-white bg-orange-900 rounded-t-lg">
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
                  msg.sender === 'user' ? 'bg-white dark:bg-orange-800 self-end' : 'bg-gray-100 self-start'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex p-2 bg-orange-900 rounded-b-lg">
            <input
              type="text"
              className="flex-1 p-2 text-black bg-orange-500 border rounded-lg" // Ajout du fond orange
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              className="p-2 ml-2 text-white bg-black rounded-lg hover:bg-orange-950"
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
