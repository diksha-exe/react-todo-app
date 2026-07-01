function TodoForm({ task, setTask, todos, setTodos })
{   //receive props from parent component (App.jsx)
    //react component is a JS function

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim() === '') return; //if user ip is spaces only
        //prevent default form submission behavior

        // Add todo
        //setTodos([...todos, task]); //add the new task to the array(String)

        setTodos([
            ...todos,
            {
                id: Date.now(),      // unique id
                text: task,
                completed: false
            }
        ]);

        setTask(""); //clear the input field after submission
    };

    return ( //returns jsx
        <form onSubmit={handleSubmit}> {/*collect user inputs*/}
            <input className="todo-input"
                type="text"
                placeholder="Enter a task..."
                
                value = {task} //react owns/controls this input
                onChange={(e) => setTask(e.target.value)}
                /*
                onChange = Whenever the input's value changes, run this function.
                event e = User typed something.
                event.target = Which HTML element triggered this event?
                event.target.value = The current value of the input field.
                */
            />
    
        <button className="add-btn" type="submit">
            Add
        </button>

        </form>
    );
}

export default TodoForm;