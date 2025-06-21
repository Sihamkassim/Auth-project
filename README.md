# Auth Project

A full-featured user authentication and posts management API built with Node.js, Express, MongoDB, and JWT.  
This project supports user signup, login, email verification, password reset, and CRUD operations for posts linked to authenticated users.

---

## Features

- **User Authentication & Authorization**
  - User signup and login with secure password hashing (bcrypt)
  - JWT-based authentication and authorization middleware
  - Email verification via verification codes
  - Password reset functionality with email codes
  - Secure cookie management with cookie-parser and helmet for HTTP security headers

- **Posts CRUD**
  - Create, read (single & paginated list), update, and delete posts
  - Posts linked to authenticated users (userId)
  - Authorization ensures users can only modify or delete their own posts

---

## Technologies & Packages Used

- **bcrypt** – Hash passwords securely  
- **cookie-parser** – Parse and handle cookies  
- **helmet** – Set HTTP security headers  
- **joi** – Request payload validation  
- **jsonwebtoken** – Generate and verify JWT tokens  
- **mongodb & mongoose** – MongoDB object modeling and database interactions  
- **nodemailer** – Sending emails for verification and password reset  
- **nodemon** – Development tool for automatic server restarts

---

## API Endpoints

| Method | Endpoint                            | Description                          | Auth Required? |
|--------|-----------------------------------|------------------------------------|---------------|
| POST   | `/api/auth/signup`                 | Register a new user                 | No            |
| POST   | `/api/auth/signin`                 | User login                         | No            |
| POST   | `/api/auth/signout`                | User logout                       | Yes           |
| PATCH  | `/api/auth/send-verification-email`  | Send verification code email     | Yes           |
| PATCH  | `/api/auth/verify-verification-email`| Verify email with code            | Yes           |
| PATCH  | `/api/auth/change-password`        | Change logged-in user password     | Yes           |
| PATCH  | `/api/auth/send-forgot-password-code`| Send forgot password email code   | No            |
| PATCH  | `/api/auth/verify-forgot-password-code`| Verify forgot password code and reset password | No            |
| GET    | `/api/posts/all-posts`             | Get paginated list of posts        | No            |
| GET    | `/api/posts/single-post`           | Get details of a single post       | No            |
| POST   | `/api/posts/create-post`           | Create a new post                  | Yes           |
| PUT    | `/api/posts/update-post`           | Update a post by ID                | Yes           |
| DELETE | `/api/posts/delete-post`           | Delete a post by ID                | Yes           |

---

## Setup & Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sihamkassim/Auth-project.git
   cd Auth-project
   
2,Install dependencies:
  
     npm install

3,Create a .env file in the root directory and add the following environment variables:

  
    PORT=8000
    MONGO_URL=your_mongodb_connection_string
    TOKEN_SECRET=your_jwt_secret
    NODE_CODE_SENDING_EMAIL_ADDRESS=your_email@gmail.com
    NODE_CODE_SENDING_EMAIL_PASSWORD=your_email_password_or_app_password
    HMAC_VERIFICATION_CODE_SECRET=your_hmac_secret

4,Start the server with nodemon (development):

        npm run dev

5,The API will be available at http://localhost:8000/api



Project Structure Overview


├── controllers/          # Route handlers (authController, postController)

├── middlewares/          # Middleware (authentication, validation)

├── models/               # Mongoose models (User, Post)

├── routers/              # API route definitions (authRouter, postRouter)

├── utils/                # Utility functions (hashing, email, etc.)

├── index.js              # Entry point to initialize Express and routes

├── .env                  # Environment variables (not committed)


---
## Validation

All inputs are validated using Joi schemas to ensure data integrity and security.
---

## Security

Passwords are hashed with bcrypt before saving to the database.

JWT tokens secure protected routes.

Helmet is used to set secure HTTP headers.

cookie-parser handles cookies securely.

Verification and reset codes are hashed with HMAC to prevent tampering.
