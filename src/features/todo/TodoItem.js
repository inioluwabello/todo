import { useDispatch } from 'react-redux';
import { deleteTodoItem, moveTodo, setIsCompleted } from './todoSlice';
import { useRef, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DraggableTodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTodoItem(id));
  };

  const [hoverState, setHoverState] = useState(false);
  const handleMouseEnter = () => {
    setHoverState(true);
  };
  const handleMouseLeave = () => {
    setHoverState(false);
  };

  const [, drag] = useDrag({
    type: 'TODO_ITEM',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'TODO_ITEM',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      console.log(dragIndex)
      console.log(hoverIndex)
      dispatch(moveTodo({ dragIndex, hoverIndex }));
      item.index = hoverIndex;
    },
  });

  const ref = useRef(null);
  drag(drop(ref));

  return (
    <div
      ref={ref}
      className={`todo-item pointer ${todo.isCompleted === true ? 'completed' : ''}`}
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
          {hoverState === true && (
            <img
              className="pointer"
              onClick={() => handleDelete(todo.id)}
              src="/images/icon-cross.svg"
              alt="X"
              style={{ width: '12px' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default DraggableTodoItem;
