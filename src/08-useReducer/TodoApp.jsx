import React, { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos") || []);
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    console.log(id);
    const action = {
      type: "[TODO] Remove Todo",
      payload: id,
    };
    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    console.log(id);
    const action = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };
    dispatch(action);
  };
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col">
            <h1 className="text-center">
              TodoApp:10, <small>pendientes: 2</small>
            </h1>
            <hr />
            <div className="row ">
              <div className="col-7">
                <TodoList
                  todos={todos}
                  onDeleteTodo={handleDeleteTodo}
                  onToggleTodo={handleToggleTodo}
                />
              </div>
              <div className="col-5 text-center">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={handleNewTodo} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
