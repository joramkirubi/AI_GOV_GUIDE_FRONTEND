const BASE_URL = "http://127.0.0.1:8000/api/chat/";

export async function askAI(message, model = "openai") {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
      model  // 👈 send model preference
    }),
  });

  if (!res.ok) {
    throw new Error("Failed to contact backend");
  }

  return res.json();
}
