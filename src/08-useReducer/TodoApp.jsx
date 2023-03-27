import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "./../hooks/useTodo";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    pendingTodosCount,
    todosCount,
  } = useTodo();
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col">
            <h1 className="text-center">
              TodoApp:{todosCount},{" "}
              <small>pendientes: {pendingTodosCount}</small>
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
