<h1 align="center"></h1>
![App Demo](/frontend/public/lingo.jpg)

### Key Features

- High-Fidelity Video: Crystal clear video calls for individuals and groups, including screen sharing features.

- Interactive Chat: Engaging real-time messaging with support for attachments and instant reactions.

- Personalized UI: Customize the look and feel with 32 unique, pre-built design themes.

- Secure Access: Data privacy ensured through industry-standard JWT authentication protocols.

- Blazing Fast: Instant load times and optimistic UI updates powered by Vite and TanStack Query.

- Smart State: Smooth application flow managed by the lightweight Zustand library.

# 🚀 Getting Started

## .env

### Backend

```
PORT=5001
MONGO_URI=your_mongo_uri
STEAM_API_KEY=your_steam_api_key
STEAM_API_SECRET=your_steam_api_secret
JWT_SECRET_KEY=your_jwt_secret
NODE_ENV=development
```

### Frontend

```
VITE_STREAM_API_KEY=your_stream_api_key
```

## Run Backend

```
cd backend
npm install
npm run dev
```

## Run Frontend

```
cd frontend
npm install
npm run dev
```