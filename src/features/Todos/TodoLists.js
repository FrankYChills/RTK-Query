import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useGetTodosQuery } from "../api/apiSlice";

const TodoLists = () => {
  const [newTodo, setNewTodo] = useState("");

  //   get the data from query
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();
  const handleSubmit = (e) => {
    e.preventDefault();
    // add to do
    setNewTodo("");
  };

  const newItemSection = (
    <form onSubmit={handleSubmit}>
      <label htmlFor="new-todo">Enter a new To do</label>
      <div className="new-todo">
        <input
          type="text"
          id="new-todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new Todo"
        />
      </div>
      <button className="submit">
        <FontAwesomeIcon icon={faUpload} />
      </button>
    </form>
  );
  let content;
  if (isLoading) {
    content = <p>Loading....</p>;
  } else if (isSuccess) {
    content = JSON.stringify(todos);
  } else if (isError) {
    content = <p>{error}</p>;
  }
  return (
    <main>
      <h1>Todo List</h1>
      {newItemSection}
      {content}
    </main>
  );
};

export default TodoLists;
