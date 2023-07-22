import { useDispatch } from "react-redux";
import { deleteTodoItem, setIsCompleted } from "./todoSlice";
import { useState } from "react";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodoItem(id))
  }

  const [hoverState, setHoverState] = useState(false);
  const handleMouseEnter = () => {
    setHoverState(true)
  };
  const handleMouseLeave = () => {
    setHoverState(false)
  };

  return (
    <div
      className={`todo-item pointer ${todo.isCompleted === true ? "completed" : ""}`}
      onClick={() => {
        dispatch(setIsCompleted(todo));
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="space-between">
        <div
          className="check-box"
          onClick={() => {
            dispatch(setIsCompleted(todo));
          }}
        >
          {todo.isCompleted === true && <img src="/images/icon-check.svg" alt="check" />}
        </div>
        <div className={`flex-grow-1 item`}>{todo.item}</div>
        <div className="delete">
          {hoverState === true && <img className="pointer" 
            onClick={() => handleDelete(todo.id)} 
            src="/images/icon-cross.svg" alt="X" 
            style={{ width: "12px" }} />}
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
