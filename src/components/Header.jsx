function Header({todos}){  //Reach component is a JS function 
    return(  //js fxn returns jsx
        <header>
            <h1>ToDo App</h1>
            <p>
            Completed: {todos.filter(t => t.completed).length} <br></br>
            Total Tasks: {todos.length}</p>
            <br></br>
        </header>
    )
}
export default Header;  //another file can import this