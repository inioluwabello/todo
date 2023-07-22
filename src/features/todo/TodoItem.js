const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <div className="space-between">
        <div className="check-box">
          {todo.completed && <img src="/images/icon-check" alt="check" />}
        </div>
        <div className={`item ${todo.completed ? "completed" : ""}`}>{todo.item}</div>
        <div className="delete">
          <img src="/images/icon-cross" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
