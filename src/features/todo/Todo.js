import { useSelector } from "react-redux";
import { selectTodos } from "./todoSlice";
import TodoItem from "./TodoItem";

const TodoComponent = () => {
  const todos = useSelector(selectTodos);
  return (
    <section className="container">
      <header className="header"></header>
      <main className="main"></main>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </section>
  );
};

export default TodoComponent;
