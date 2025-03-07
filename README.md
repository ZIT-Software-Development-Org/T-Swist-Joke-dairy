# T-Swist-Joke-dairy
Project Overview
Joke dairy is a joke-sharing website where users can register, view jokes via a carousel, like and comment on jokes, and see the joke authors. Users who register as posters can post jokes and receive notifications when their jokes are liked.
Tech Stack
•	Front-end: Tailwind, React-Vite Typescript
•	Back-end: Node.js, Express, Socket.io, Axios
•	Database: PostgreSQL, Sequalize
•	Architecture: Model-View-Controller (MVC)
________________________________________
Development Timeline (8 Days)
Day 1: Project Setup & Planning
1.	Initialize Git repository and create separate branches for frontend and backend.
2.	Set up the project structure: 
o	Front-end: Install React TypeScript, Tailwind CSS.
o	Back-end: Set up Express with TypeScript, Sequelize for PostgreSQL, and Socket.io.
3.	Define database schema and relationships in Sequelize.
4.	Create an ERD (Entity-Relationship Diagram) for database design.
________________________________________
Day 2: User Authentication System
1.	Set up user authentication using JWT (JSON Web Tokens): 
o	Register API: POST /auth/signup
o	Login API: POST /auth/login
2.	Hash passwords using bcryptjs.
3.	Implement authentication middleware.
4.	Create user model, migration, and seed data.
5.	Implement login/signup UI in React.
________________________________________
Day 3: Joke Management System (Back-end)
1.	Create Joke model with attributes: 
o	id, content, authorId, likes, createdAt.
2.	Implement CRUD operations: 
o	Fetch jokes: GET /jokes
o	Post a joke (only posters): POST /jokes
o	Like a joke: POST /jokes/:id/like
o	Comment on a joke: POST /jokes/:id/comment
3.	Create relations between User and Joke models.
4.	Implement authorization middleware to restrict posting to registered posters.
________________________________________
Day 4: Joke Display & Interaction (Front-end)
1.	Implement joke display using a carousel or slides in React.
2.	Fetch jokes from backend using Axios.
3.	Implement like and comment features in the frontend.
4.	Show joke author details.
5.	Style the UI using Tailwind CSS.
________________________________________
Day 5: Poster Registration & Notifications
1.	Create a system where users can register as posters.
2.	Implement WebSockets (Socket.io) to send real-time notifications when someone likes a joke.
3.	Design a notification system on the frontend.
4.	Create a UI for posters to post jokes.
________________________________________
Day 6: UI Enhancements & Testing
1.	Improve UI/UX design with Tailwind.
2.	Implement form validation for authentication and joke submission.
3.	Write unit tests for backend APIs using Jest.
4.	Conduct frontend testing using React Testing Library.
________________________________________
Day 7: Deployment & Optimization
1.	Deploy backend on Render/Vercel.
2.	Deploy frontend on Vercel.
3.	Configure environment variables for production.
4.	Optimize database queries and API performance.
________________________________________
Day 8: Final Testing & Launch
1.	Conduct end-to-end testing.
2.	Fix any remaining bugs or issues.
3.	Ensure mobile responsiveness.
4.	Officially launch the website!
________________________________________
Conclusion
By following this plan, Jokedairy will be developed efficiently within 8 days, ensuring all functionalities work seamlessly and users have an engaging experience.
