import { useState, useEffect, useRef } from "react";
import ChatWindow from "./components/ChatWindow";
import InputBox from "./components/InputBox";
import { askAI } from "./api";

function App() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const chatRef = useRef(null);

  // Auto-scroll when new messages arrive
  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  async function handleSend(userMessage) {
    const newMessages = [...messages, { sender: "user", text: userMessage }];
    setMessages(newMessages);
    setLoading(true);

    try {
      const response = await askAI(userMessage, "grok"); 
      setMessages([
        ...newMessages,
        { sender: "ai", text: response.reply },
      ]);
    } catch (error) {
      setMessages([
        ...newMessages,
        { sender: "ai", text: "Error contacting server." },
      ]);
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#f5f7fa",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "15px",
          backgroundColor: "#0078ff",
          color: "white",
          textAlign: "center",
          fontSize: "20px",
          fontWeight: "bold",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        AI Government Service Guide
      </div>

      {/* Scrollable Chat Area */}
      <div
        ref={chatRef}
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ChatWindow messages={messages} />
      </div>

      {/* “AI is typing…” */}
      {loading && (
        <div style={{ textAlign: "center", padding: "10px" }}>
          <em>AI is typing...</em>
        </div>
      )}

      {/* Input Box */}
      <InputBox onSend={handleSend} />
    </div>
  );
}

export default App;
