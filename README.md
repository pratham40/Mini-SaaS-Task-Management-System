# Mini SaaS Task Management System

A full-stack task management app with user authentication and per-user task tracking.

## Tech Stack Used

### Frontend

- React 19
- React Router DOM
- Axios
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express
- Sequelize ORM
- PostgreSQL
- JWT (jsonwebtoken)
- bcrypt
- morgan
- cors
- dotenv

## Features Implemented

- User signup with hashed password storage
- User login with JWT token generation
- Protected task routes using auth middleware
- Create task
- Get authenticated user's tasks
- Mark task as completed
- Delete task
- Task status support: `PENDING` and `COMPLETED`
- CORS enabled for frontend-backend local development

## Project Structure

- `frontend/` - React app (UI + API calls)
- `backend/` - Express API + Sequelize models/controllers/routes

## Setup Steps

## 1. Clone and open project

```bash
git clone <your-repo-url>
cd MiniSaaSTaskManagementSystem
```

## 2. Configure Backend Environment Variables

Create a `.env` file inside `backend/` with:

```env
PORT=
DATABASE_URL=postgres://<username>:<password>@localhost:5432/<database_name>
JWT_SECRET=your_jwt_secret
```

## 3. Install Dependencies

Install backend dependencies:

```bash
cd backend
npm install
```

Install frontend dependencies:

```bash
cd ../frontend
npm install
```

## 4. Run the Application

Start backend server (from `backend/`):

```bash
npm run dev
```

Start frontend app (from `frontend/`) in a separate terminal:

```bash
npm run dev
```

## 5. Open in Browser

Frontend: http://localhost:5173  
Backend: http://localhost:5000

API base path used by frontend: `http://localhost:5000/api`

## API Routes

### Auth

- `POST /api/auth/signup`
- `POST /api/auth/login`

### Tasks (Protected)

- `GET /api/tasks`
- `POST /api/tasks`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

## Notes

- Backend auto-syncs Sequelize models on startup using `sequelize.sync({ alter: true })`.
- Keep `DATABASE_URL` pointed to a PostgreSQL database.
