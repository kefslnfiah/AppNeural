// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')

// const app = express()
// app.use(cors())
// app.use(express.json())

// // mongoose.connect()

// // app.post('/add', (req,res =>{
// //     const task  = req.body.task;
// // }))

// app.listen(3001, () => {
//     console.log("server is running")
// })



// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// require('dotenv').config()

// const app = express()
// app.use(cors())
// app.use(express.json())

// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Error connecting to MongoDB:", err))

// app.post('/add', (req, res) => {
//     const task = req.body.task;
//     res.send({ message: "Task received", task });
// })

// // Use environment variable for port
// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`)
// })



// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// require('dotenv').config()
// const TodoModel = require('./Models/Todo')

// const app = express()
// app.use(cors())
// app.use(express.json())

// // Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => console.log("Connected to MongoDB"))
//   .catch(err => console.error("Error connecting to MongoDB:", err))

// // Define a Task schema
// const taskSchema = new mongoose.Schema({
//     task: {
//         type: String,
//         required: true
//     }
// })

// // Create a Task model
// const Task = mongoose.model('Task', taskSchema)

// // POST route to add a task
// app.post('/add', async (req, res) => {
//     const task = new Task({
//         task: req.body.task
//         TodoModel.create({
//             task: task
//         }).then(result => res.json(result))
//         .catch(err => res.json(err))
//     })
    
//     try {
//         const savedTask = await task.save() // Save task to the database
//         res.status(200).send({ message: "Task saved successfully", savedTask })
//     } catch (error) {
//         res.status(400).send({ error: "Error saving task" })
//     }
// })

// // Start the server
// app.listen(process.env.PORT, () => {
//     console.log(`Server is running on port ${process.env.PORT}`)
// })


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const TodoModel = require('./Models/Todo');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Error connecting to MongoDB:", err));

  app.get('/get', (req, res) => {
    TodoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
  })

//   app.put('/update/:id', (req,res) => {
//     const {id} = req.params;
//     TodoModel.findByIdAndUpdate({_id: id}, {done: true})
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
//   })

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findById(id)
      .then(todo => {
        todo.done = !todo.done;  // Toggle done status
        return todo.save();
      })
      .then(updatedTodo => res.json(updatedTodo))
      .catch(err => res.json(err));
  });
  

  app.delete('/delete/:id', (req, res)=> {
    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
  })

// POST route to add a task
app.post('/add', async (req, res) => {
    const task = req.body.task;  // Extract the task from the request body

    try {
        // Create and save the task using the TodoModel
        const savedTask = await TodoModel.create({ task });
        res.status(200).json({ message: "Task saved successfully", savedTask });
    } catch (error) {
        res.status(400).json({ error: "Error saving task", details: error });
    }
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
