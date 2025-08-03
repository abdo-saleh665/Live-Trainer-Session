import { useState, useEffect } from "react";
import { X, Send, MessageCircle } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: Date;
  type: "user" | "trainer" | "system";
}
const MessageOverlay: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "system",
      text: "Welcome to the chat!",
      timestamp: new Date(),
      type: "system",
    },
    {
      id: 2,
      sender: "John Doe",
      text: "Ready to push your limits today?",
      timestamp: new Date(),
      type: "trainer",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  useEffect(() => {
    const simulateMessages = () => {
      const trainerMessages = [
        "Great form! Keep it up!",
        "Remember to breathe properly",
        "You're doing amazing!",
        "Let's increase the intensity",
        "Stay focused on your posture",
      ];
      const randomMessage =
        trainerMessages[Math.floor(Math.random() * trainerMessages.length)];
      const newMessage: Message = {
        id: Date.now(),
        sender: "John Doe",
        text: randomMessage,
        timestamp: new Date(),
        type: "trainer",
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    };
    const interval = setInterval(simulateMessages, 15000);
    return () => clearInterval(interval);
  }, []);
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const Message: Message = {
        id: Date.now(),
        sender: "You",
        text: newMessage,
        timestamp: new Date(),
        type: "user",
      };
      setMessages((prevMessages) => [...prevMessages, Message]);
      setNewMessage("");
    }
  };
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  if (isMinimized) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
        >
          <MessageCircle className="w-6 h-6 cursor-pointer" />
          {messages.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {messages.length}
            </div>
          )}
        </button>
      </div>
    );
  }
  return (
    <div className="fixed bottom-4 right-4 w-80 max-w-[calc(100vw-2rem)] z-50">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 ">
              <MessageCircle className="w-5 h-5" />
              <h3 className="font-semibold">Live Chat</h3>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X className="w-5 h-5 cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="h-64 overflow-y-auto p-4 space-y-3">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.type === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                  message.type === "user"
                    ? "bg-emerald-500 text-white"
                    : message.type === "trainer"
                    ? "bg-blue-100 text-blue-900"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {message.type !== "user" && (
                  <div className="text-xs font-medium mb-1 opacity-75">
                    {message.sender}
                  </div>
                )}
                <div className="text-sm">{message.text}</div>
                <div className="text-xs mt-1 opacity-75">
                  {formatTime(message.timestamp)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <button
              onClick={handleSendMessage}
              className="bg-emerald-500 hover:bg-emerald-600 text-white p-2 rounded-lg transition-colors "
            >
              <Send className="w-4 h-4 cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageOverlay;
