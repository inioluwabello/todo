import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoItem } from "./todoSlice";

const AddItem = () => {
  const dispatch = useDispatch();

  const [todoValue, setTodoValue] = useState("");
  const handleInput = (e) => {
    setTodoValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setTodoValue("")
      dispatch(addTodoItem(todoValue));
    }
  };
  return (
    <div className="add-item">
      <div className="space-between">
        <div className="check-box cb"></div>

        <div className={`flex-grow-1 item-input`}>
          <input
            type="text"
            className="input-box"
            placeholder="Press 'Enter' to add item"
            value={todoValue}
            onChange={handleInput}
            onKeyDown={handleKeyPress}
          />
        </div>

        {/* <div className="delete">
          <img src="/images/icon-cross" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default AddItem;
