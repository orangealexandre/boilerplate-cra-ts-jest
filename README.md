# Express + React + TypeScript + Jest Boilerplate

A full-stack TypeScript application with Express backend and React frontend, featuring Jest testing for both client and server.

## Project Structure

```
src/
├── client/          # React frontend
│   ├── App.tsx
│   ├── App.css
│   ├── index.tsx
│   └── ...
└── server/          # Express backend
    ├── index.ts
    ├── routes/
    │   └── api.ts
    └── ...
```

## Features

- **Frontend**: React with TypeScript
- **Backend**: Express with TypeScript
- **Testing**: Jest for both client and server
- **Development**: Hot reloading for both client and server
- **Build**: Separate build processes for client and server
- **API**: RESTful API with health checks and user management

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

#### Run both client and server simultaneously:
```bash
npm run dev
```

This will start:
- React development server on `http://localhost:3000`
- Express server on `http://localhost:5001`

#### Run client only:
```bash
npm start
```

#### Run server only:
```bash
npm run server
```
(Express server on `http://localhost:5001`)

### Testing

#### Run all tests (client + server):
```bash
npm run test:all
```

#### Run client tests only:
```bash
npm test
```

#### Run server tests only:
```bash
npm run server:test
```

### Building

#### Build both client and server:
```bash
npm run build:all
```

#### Build client only:
```bash
npm run build
```

#### Build server only:
```bash
npm run server:build
```

### Production

1. Build the application:
   ```bash
   npm run build:all
   ```

2. Start the production server:
   ```bash
   npm run server:start
   ```

The server will serve the React app from the `client/build` directory.

## API Endpoints

- `GET /api/health` - Server health check
- `GET /api/hello` - Hello message
- `GET /api/users` - Get all users
- `POST /api/users` - Create a new user

## Configuration Files

- `tsconfig.json` - TypeScript config for client
- `tsconfig.server.json` - TypeScript config for server
- `jest.server.config.js` - Jest config for server tests
- `nodemon.json` - Nodemon config for server development

## Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5001
REACT_APP_API_URL=http://localhost:5001/api
```

## Available Scripts

- `npm start` - Start React development server
- `npm run build` - Build React app for production
- `npm test` - Run React tests
- `npm run server` - Start Express development server
- `npm run server:build` - Build Express server
- `npm run server:start` - Start production Express server
- `npm run server:test` - Run Express tests
- `npm run dev` - Start both client and server in development
- `npm run test:all` - Run all tests
- `npm run build:all` - Build both client and server

## Technologies Used

### Frontend
- React 19
- TypeScript
- Jest + React Testing Library

### Backend
- Express.js
- TypeScript
- Jest + Supertest
- CORS
- Helmet (security)
- Morgan (logging)

### Development Tools
- Nodemon (server hot reload)
- Concurrently (run multiple commands)
- ts-node (TypeScript execution)
