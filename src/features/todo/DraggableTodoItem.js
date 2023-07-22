// DraggableTodoItem.js
import { useDrag } from 'react-dnd';
import TodoItem from './TodoItem';

const DraggableTodoItem = ({ todo, index }) => {
  const [, drag] = useDrag({
    type: 'TODO_ITEM',
    item: { index },
  });

  return <div ref={drag}><TodoItem todo={todo} /></div>;
};

export default DraggableTodoItem;
