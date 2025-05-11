Backend API for a Basic Blogging Platform with Role-Based Access Control

1. Server Setup
 listens on port 3000.


2. Blog Post CRUD (Stored in MongoDB)
Use Mongoose models to manage blog posts

Create Post (POST /posts): fields: title, content, author.
Read All Posts (GET /posts)
Read Single Post (GET /posts/:id)
Update Post (PATCH /posts/:id)
Delete Post (DELETE /posts/:id)
❗ Only authenticated users can create, update, or delete posts. ❗ Only the post author or users with the role admin can update/delete a post.


3. Middleware (Custom Implementations)
Logger Middleware: Log each request’s method, URL, and timestamp. ➤ Additionally, write the log entries to a logs.txt file using the fs module.


4. Authentication & Authorization
Implement secure user handling with JWT-based authentication.

Register (POST /auth/register): Create a user with name, email, password, and a default role (user).
Login (POST /auth/login): Return a signed JWT token on successful login.
Use middleware to:

Authenticate users using JWT in headers.
Authorize users based on their roles (e.g., user, admin).
5. Role-Based Access Control (RBAC)
Only admins can access routes that list all users or delete users.
Users can view their own profile, but only admins can view all users.
Suggested roles: user, admin Roles can be hardcoded for simplicity or assigned during registration.

6. MongoDB Integration (Post & Author Management)
Use MongoDB (via Mongoose) for both users and blog posts. Additionally:

Add Author (POST /authors): Create a new author with name, email.
Get All Authors (GET /authors)
Get Posts by Author Name (GET /posts/author/:name)
