<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh -->



# Todo App with MERN Stack

This project is a simple Todo app built using the MERN (MongoDB, Express, React, Node.js) stack. The app allows users to add, update, and delete tasks from the Todo list, with data stored in a MongoDB database.

## Table of Contents
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Frontend Features](#frontend-features)
- [Backend Setup](#backend-setup)
- [MongoDB Atlas](#mongodb-atlas)
- [Configuration](#configuration)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

Install the dependencies for both frontend and backend:

## For frontend:
cd frontend
npm install

## For backend:
cd backend
npm install

## Running the Project
## Frontend
To start the frontend, navigate to the frontend directory and run:
    npm run dev

This will start the React frontend, usually on http://localhost:3000.

## Backend
To start the backend, navigate to the backend directory and run:

npm start


This will start the Express backend server, typically on http://localhost:3001.

API Endpoints
1. Add a Task (POST)
Endpoint: /add
Method: POST
Body: { "task": "Your task description" }
Response: Returns the saved task.
2. Get All Tasks (GET)
Endpoint: /get
Method: GET
Response: Returns a list of all tasks.
3. Update a Task (PUT)
Endpoint: /update/:id
Method: PUT
Response: Updates a task's status to "done".
4. Delete a Task (DELETE)
Endpoint: /delete/:id
Method: DELETE
Response: Deletes a task by ID.
Frontend Features
Task Creation: Users can enter a new task in the input field and add it to the list by clicking the "Add" button.
Task Update: Users can toggle a task's completion status by clicking on it.
Task Deletion: Users can delete a task by clicking the trash icon.
Real-time Sync: The frontend fetches tasks from the backend and reflects changes in real-time using Axios.
Backend Setup
Dependencies
The backend uses the following main dependencies:

express
mongoose
cors
dotenv
## To connect to MongoDB, create a .env file in the backend directory with the following variables:

MONGO_URI=<your_mongodb_connection_string>
PORT=3001


The backend handles CRUD operations on the tasks using MongoDB Atlas.

MongoDB Atlas
Make sure you have set up a MongoDB Atlas cluster. You can view and manage your tasks by accessing the MongoDB Atlas dashboard. Please refresh the database view after each task operation (add/update/delete) to see the updated data.

## Configuration
Ensure you have the correct .env file in place with the MongoDB URI. Also, make sure your frontend and backend run on the expected ports (3000 for frontend and 3001 for backend).

## Configuration (continued)

### Environment Variables

In the backend, create a `.env` file with the following configuration:

MONGO_URI=<your_mongodb_connection_string> PORT=3001


- Replace `<your_mongodb_connection_string>` with your actual MongoDB Atlas connection string.
- The `PORT` variable can be modified if necessary, but it is set to `3001` by default.

### Axios Configuration

In your React frontend, Axios is used to communicate with the backend API. Ensure that the API endpoints are correctly configured in your React components:

```javascript
axios.get('http://localhost:3001/get')
axios.post('http://localhost:3001/add', { task })
axios.put('http://localhost:3001/update/'+id)
axios.delete('http://localhost:3001/delete/'+id)


Make sure that both your frontend and backend are running concurrently for the API calls to work.

## Project Structure
Here’s a basic overview of the directory structure:

your-repo-name/
│
├── backend/
│   ├── Models/
│   │   └── Todo.js        # Mongoose model for Todo tasks
│   ├── index.js           # Express server setup
│   ├── .env               # MongoDB connection string and PORT config
│   ├── package.json       # Backend dependencies
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Create.jsx # Component to add tasks
│   │   │   └── Home.jsx   # Main Todo list component
│   ├── public/
│   ├── .env               # Frontend environment variables (if any)
│   ├── package.json       # Frontend dependencies
│
└── README.md              # Project documentation


Troubleshooting
MongoDB Atlas Issues: If the data is not appearing in MongoDB Atlas, ensure that your cluster is connected and refresh your data view.
CORS Issues: If you face CORS issues when making requests from the frontend, make sure that the cors middleware is properly configured in your Express server.
Port Conflicts: Ensure that no other services are running on ports 3000 (frontend) or 3001 (backend) to avoid port conflicts.
Environment Variables: Double-check the .env file to ensure that the MongoDB connection string and port are set correctly.
Conclusion
This project demonstrates a basic Todo list application built using the MERN stack. It covers fundamental CRUD operations with MongoDB Atlas, along with a React frontend that communicates with an Express backend using Axios. Feel free to clone and extend this project as per your requirements.

Happy coding!


This `README.md` provides instructions for setting up, running, and understanding the code structure for both the frontend and backend. It covers all key configurations and necessary steps for a new developer or contributor to get started with your project.
