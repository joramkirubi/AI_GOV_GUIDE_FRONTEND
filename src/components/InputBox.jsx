import { useState } from "react";

export default function InputBox({ onSend }) {
  const [message, setMessage] = useState("");

  function handleSend() {
    if (message.trim() === "") return;
    onSend(message);
    setMessage("");
  }

  return (
    <div
      style={{
        display: "flex",
        padding: "10px",
        borderTop: "1px solid #ddd",
      }}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask something..."
        style={{
          flex: 1,
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
        }}
        onKeyDown={(e) => e.key === "Enter" && handleSend()}
      />

      <button
        onClick={handleSend}
        style={{
          marginLeft: "10px",
          padding: "12px 20px",
          backgroundColor: "#0078ff",
          border: "none",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
}
