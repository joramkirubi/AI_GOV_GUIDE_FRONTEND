import Message from "./Message";

export default function ChatWindow({ messages, loading }) {
  return (
    <div
      style={{
        flex: 1,
        padding: "20px",
        overflowY: "auto",
      }}
    >
      {messages.map((msg, index) => (
        <Message key={index} sender={msg.sender} text={msg.text} />
      ))}

      {loading && (
        <div style={{ padding: "10px", display: "flex", justifyContent: "flex-start" }}>
          <div
            style={{
              background: "#e8e8e8",
              padding: "10px 16px",
              borderRadius: "14px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
              width: "60px",
            }}
          >
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>

            <style>
              {`
              .dot {
                width: 6px;
                height: 6px;
                background-color: #555;
                border-radius: 50%;
                display: inline-block;
                animation: blink 1.4s infinite both;
              }

              .dot:nth-child(1) { animation-delay: 0s; }
              .dot:nth-child(2) { animation-delay: 0.2s; }
              .dot:nth-child(3) { animation-delay: 0.4s; }

              @keyframes blink {
                0% { opacity: .2; }
                20% { opacity: 1; }
                100% { opacity: .2; }
              }
              `}
            </style>
          </div>
        </div>
      )}
    </div>
  );
}
