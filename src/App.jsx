import Header from "./components/Header"; //bring default export

import TodoForm from "./components/TodoForm"; //bring default export
import TodoList from "./components/TodoList"; //bring default export
import Footer from "./components/Footer"; //bring default export

import {useState} from 'react';

function App(){

  const [task, setTask] = useState(''); //keyboard task input
    
  const [todos, setTodos] = useState([]); //state variable to store the list of tasks
  console.log("Todos:", todos);


  function clearAllTodos() {
    setTodos([]);
  }

    function deleteTodo(id) {
      console.log("Deleting:", id);
      setTodos(
        todos.filter((todo) => todo.id !== id) //filter makes new array with element whos condition is TRUE, skips false ones
      );
     }

    function toggleTodo(id) {
      setTodos(
        todos.map(todo =>
          todo.id === id
            ? { ...todo, completed: !todo.completed }  //toggle completed status
            : todo
        )
      );
    }

    function editTodo(id, newText) {
      setTodos(
        todos.map(todo =>
          todo.id === id
            ? { ...todo, text: newText }
            : todo
        )
      );
    }


  return (
    <>
      {/*single parent element,
      if sibling elements then wrap
      into a parent element */}

  {/*UI components} */}
      <Header todos={todos} />
      <TodoForm task={task} setTask={setTask} todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} clearAllTodos={clearAllTodos} /> 
      <Footer />

  {/* <> </> is a fragment,
  it is a parent element but does not render in the DOM*/}
    </>

  );
}

export default App;