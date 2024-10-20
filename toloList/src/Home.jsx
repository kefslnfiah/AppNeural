// import React, { useEffect, useState } from 'react'
// import Create from './Create'
// import axios from 'axios'
// import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

// function Home() {
//     const [todos, setTodos] = useState([])
//     // useEffect(() => {
//     //     axios.get('http://localhost:3001/get')
//     //     .then(result => setTodos(result.data))
//     //     .catch(err => console.log(err))
//     // }, [])

//     useEffect(() => {
//         axios.get('http://localhost:3001/get')
//         .then(result => {
//             console.log(result.data); // Check if data is being fetched correctly
//             setTodos(result.data);
//         })
//         .catch(err => console.log(err));
//     }, []);

//     const handleEdit = (id) => {
//         axios.put('http://localhost:3001/update/'+id)
//         // .then(result => {
//         //     console.log(result); // Check if data is being fetched correctly
//         //     setTodos(result);
//         // })

//         .then(result => {
//             location.reload()
//         })
//         .catch(err => console.log(err));
//     }

//     const handleDelete = (id) => {
//         axios.delete('http://localhost:3001/delete/'+id)
//         .then(result => {
//             location.reload()
//         })
//         .catch(err => console.log(err));
//     }

//   return (
//     <div className='home'>
//         <h2>Todo List</h2>
//         <Create />
//         {
//             todos.length === 0
//             ?
//             <div><h2>No Record</h2></ div>
//             :
//             // todos.map(todo => (
//             //     <div>
//             //         {todo.task}
//             //     </div>
//             // ))

//             // todos.map((todo, index) => (
//             //     <div className="task" key={index}>
//             //         <div className='checkbox' onClick={() => handleEdit(todo._id)}>
//             //             {todo.done ? 
//             //                 <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
//             //                 : <BsCircleFill className='icon'/>
//             //             }

//             //             <p>{todo.task}</p>
//             //         </div>
//             //         <div>
//             //             <span><BsFillTrashFill className='icon'/></span>
//             //         </div>
//             //     </div>
//             // ))

//             todos.map((todo, index) => (
//                 <div className="task" key={index}>
//                 <div className='checkbox' onClick={() => handleEdit(todo._id)}>
//                     {
//                     todo.done === true
//                         ? <BsCircleFill className='icon' />
//                         : <BsFillCheckCircleFill className='icon' />
//                     }
//                     <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
//                 </div>
//                 <div>
//                     <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} /></span>
//                 </div>
//                 </div>
//             ))
            
//         }
//     </div>
//   )
// }

// export default Home



import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import { BsCircleFill, BsFillCheckCircleFill, BsFillTrashFill } from 'react-icons/bs';

function Home() {
  const [todos, setTodos] = useState([]);

  // Fetch todos on component mount
  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => {
        setTodos(result.data);
      })
      .catch(err => console.log(err));
  }, []);

  // Handle toggle of task completion status
  const handleEdit = (id) => {
    axios.put(`http://localhost:3001/update/${id}`)
      .then(result => {
        setTodos(prevTodos => prevTodos.map(todo => 
          todo._id === id ? { ...todo, done: !todo.done } : todo
        ));
      })
      .catch(err => console.log(err));
  };

  // Handle task deletion
  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`)
      .then(result => {
        setTodos(prevTodos => prevTodos.filter(todo => todo._id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className='home'>
      <h2>Todo List</h2>
      <Create />
      {
        todos.length === 0
        ? <div><h2>No Record</h2></div>
        : todos.map((todo, index) => (
            <div className="task" key={index}>
              <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                { todo.done ? 
                  <BsFillCheckCircleFill className='icon' />
                  : <BsCircleFill className='icon' />
                }
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
              </div>
              <div>
                <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} /></span>
              </div>
            </div>
          ))
      }
    </div>
  );
}

export default Home;
