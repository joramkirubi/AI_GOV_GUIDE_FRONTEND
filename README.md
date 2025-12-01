# AI Government Service Guide - Frontend

A React chat app where people can ask questions about government services and get answers from our AI. Pretty straightforward stuff!

## What's This About?

This is the frontend part of the AI Government Service Guide. It's basically a chat interface where users can talk to an AI and get info about government services. Nothing too fancy, just a solid chat experience.

**What it does:**
- Chat interface with message history
- Auto-scrolls to show new messages (because who wants to scroll manually?)
- Shows "AI is typing..." while waiting for responses
- Clean UI that doesn't look terrible
- Talks to a backend API to get AI responses

## How's It Organized?

```
src/
├── App.js                 # main app file
├── App.css               # styling for App
├── api.js                # handles talking to backend
├── index.js              # entry point (don't touch this)
├── index.css             # global styles
├── setupTests.js         # test setup stuff
├── components/
│   ├── ChatWindow.jsx    # shows all the messages
│   ├── InputBox.jsx      # where users type
│   └── Message.jsx       # individual message component
public/
├── index.html            # the html file
├── manifest.json         # PWA stuff
└── robots.txt            # SEO stuff nobody really cares about
```

## Getting Started

You'll need:
- Node.js installed (v14 or newer)
- npm or yarn
- The backend server running on `http://127.0.0.1:8000/api/chat/`

### Setup

1. Clone the repo:
   ```bash
   git clone <repository-url>
   cd AI_GOV_GUIDE_FRONTEND
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

Done! You're ready to go.

## Running The App

### Development mode
```bash
npm start
```
This runs it on http://localhost:3000. The page will reload whenever you change something, which is pretty handy.

### Build for production
```bash
npm run build
```
Creates a production-ready version in the `build/` folder. All minified and optimized.

### Testing
```bash
npm test
```
Runs the tests. They might fail, but that's why you're working on it, right?

## How It Talks to the Backend

There's a backend API running on `http://127.0.0.1:8000/api/chat/`. When a user sends a message, the app sends it there and gets back an AI response.

The endpoint expects:
```json
{
  "message": "user's question"
}
```

And returns:
```json
{
  "reply": "ai's answer"
}
```

Check out `src/api.js` if you need to change the endpoint URL.

## The Components

### App.js
The main component. It:
- Keeps track of all the messages
- Handles sending messages to the backend
- Auto-scrolls the chat to the bottom (smooth scroll ftw)
- Shows a loading state while waiting for responses

### ChatWindow.jsx
Just displays all the messages. Pretty simple.

### InputBox.jsx
The text input field. Users type here and hit send. Gets disabled while loading.

### Message.jsx
A single message. Shows who sent it (user or AI) and the message text.

## Changing The API URL

If your backend is running somewhere else, just edit `src/api.js`:

```javascript
const BASE_URL = "http://your-backend-url/api/chat/";
```

That's it.

## Development Notes

```bash
npm start
```

This starts the dev server. React hot-reload is enabled, so your changes show up instantly. Nice for developing.

If you need to make a production build:

```bash
npm run build
```

Creates an optimized version in the `build/` folder that's ready to deploy anywhere.

## What's In Here (Tech Stack)

- **React 19.2.0** - the main UI library
- **React DOM 19.2.0** - for rendering stuff
- **Create React App** - build tooling

Testing stuff:
- @testing-library/react
- @testing-library/dom
- @testing-library/jest-dom
- @testing-library/user-event

## Deploying

You can throw this on basically any hosting platform:
- Vercel (super easy, literally just connect your repo)
- Netlify (also super easy)
- AWS S3 (if you like pain)
- GitHub Pages
- Or any web server that can serve static files

Just run `npm run build` first and deploy the `build/` folder.

## Questions?

Hit up the team or create an issue if something's broken.
