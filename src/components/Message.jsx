export default function Message({ sender, text }) {
  const isUser = sender === "user";

  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: isUser ? "flex-end" : "flex-start",
        marginBottom: "14px",
        width: "100%",
        animation: "fadeIn 0.3s ease",
      }}
    >
      {/* Container holds avatar + bubble */}
      <div
        style={{
          display: "flex",
          flexDirection: isUser ? "row-reverse" : "row",
          alignItems: "flex-end",
          gap: "8px",
          maxWidth: "75%",
        }}
      >
        {/* Avatar */}
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: isUser ? "#007bff" : "#ccc",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          {isUser ? "U" : "AI"}
        </div>

        {/* Bubble */}
        <div
          style={{
            background: isUser ? "#007bff" : "#e8e8e8",
            color: isUser ? "white" : "black",
            padding: "12px 16px",
            borderRadius: "14px",
            lineHeight: "1.6",
            whiteSpace: "pre-wrap",
            boxShadow: "0 2px 4px rgba(0,0,0,0.12)",
            maxWidth: "100%",
          }}
        >
          {text}

          {/* Timestamp */}
          <div
            style={{
              marginTop: "6px",
              fontSize: "11px",
              color: isUser ? "#d1e3ff" : "#555",
              textAlign: isUser ? "right" : "left",
            }}
          >
            {time}
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>
    </div>
  );
}
