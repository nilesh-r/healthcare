import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Dr. Smith', message: 'Patient John Doe needs follow-up', time: '10:30 AM', isOwn: false },
    { id: 2, sender: 'You', message: 'I will schedule it for next week', time: '10:35 AM', isOwn: true }
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: 'You',
        message: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true
      }]);
      setNewMessage('');
    }
  };

  return (
    <div className="p-6">
      <div className="bg-white rounded-xl shadow-sm h-[600px] flex flex-col">
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-900">Chat</h2>
        </div>
        
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="space-y-4">
            {messages.map(msg => (
              <div key={msg.id} className={`flex ${msg.isOwn ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs p-3 rounded-lg ${
                  msg.isOwn ? 'bg-blue-500 text-white' : 'bg-gray-100'
                }`}>
                  <div className="font-medium text-sm">{msg.sender}</div>
                  <div>{msg.message}</div>
                  <div className="text-xs opacity-70 mt-1">{msg.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-6 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;