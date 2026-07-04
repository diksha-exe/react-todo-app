import { MdDelete, MdEdit } from "react-icons/md";
import { useState } from "react";

function TodoList({todos, deleteTodo, toggleTodo, editTodo, clearAllTodos}) { //receive props from parent component (App.jsx)
  
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  
  function handleEdit(todo) {
    setEditingId(todo.id);
    setEditText(todo.text);
  }

  function handleSave(id) {
    if (editText.trim() === "") return;

    editTodo(id, editText);

    setEditingId(null);
    setEditText("");
  }

  return (
    <>
      <ul>
        {
          todos.map((todo) => (   //JS map() Used here to create UI from arrays
            <li
            className="todo-list"
            key={todo.id}>  {/*key is a special prop in React,identify which items changed,added,removed*/}

              {editingId === todo.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSave(todo.id);
                  }

                  if (e.key === "Escape") {
                    setEditingId(null);
                    setEditText("");
                  }
                }}
                
                autoFocus
              />
            ) : (
              <span className="todo-text">
                {todo.completed ? <s>{todo.text}</s> : todo.text}
              </span>
            )}

            <div className="todo-actions">

              <span className={todo.completed ? "done" : "pending"}>
                {
                todo.completed ?
                "Completed ✅" : "Pending"
                }
              </span>

              <button 
              className="done-btn"
              onClick={() => toggleTodo(todo.id) }>

                Mark Done
              </button>

              {editingId === todo.id ? (
                <button
                  className="edit-btn"
                onClick={() => handleSave(todo.id)}>
                  Save
                </button>
              ) : (
                <button
                  className="edit-btn"
                  onClick={() => handleEdit(todo)}>
                  <MdEdit />
                </button>
              )}

              <button
              className="delete-btn"
              onClick={ () => deleteTodo(todo.id)}>
                <MdDelete />
              </button>
            </div>
          
            </li>

        ))}
      </ul>

     
      
    
    <button
      className="clearAll-btn"
      onClick={() => {
        if (window.confirm("Are you sure you want to delete all todos?")) {
          clearAllTodos();
        }
      }}
    >
      Clear All Todos
    </button>
  </>
  );
}

export default TodoList;