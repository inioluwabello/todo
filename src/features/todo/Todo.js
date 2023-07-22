import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted, selectFilter, selectTodos, setFilter, moveTodo } from './todoSlice';
import DraggableTodoItem from './DraggableTodoItem'; // Import the new component
import Header from './Header';
import AddItem from './AddItem';
import Footer from './Footer';
import { useMemo } from 'react';
import { selectPageConfig } from '../pageConfig/pageConfigSlice';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FilterButtons from './FilterButtons';

const TodoComponent = () => {
  const dispatch = useDispatch();
  const pageConfig = useSelector(selectPageConfig);
  const todos = useSelector(selectTodos);
  const selectedFilter = useSelector(selectFilter);

  const filteredItems = useMemo(() => {
    switch (selectedFilter) {
      case 'active':
        return todos.filter((todo) => todo.isActive === true);
      case 'completed':
        return todos.filter((todo) => todo.isCompleted === true);
      default:
        return todos;
    }
  }, [todos, selectedFilter]);

  const getPendingItemsCount = () => {
    const pendingItems = filteredItems.filter((todo) => !todo.isCompleted);
    return pendingItems.length;
  };

  const PICount = getPendingItemsCount();

  return (
    <DndProvider backend={HTML5Backend}>
      <section className={`container ${pageConfig.theme}`}>
        <Header />

        <main className="main">
          <div className="content">
            <AddItem />

            <div className="items-container">
              {filteredItems.map((todo, index) => (
                <DraggableTodoItem key={todo.id} todo={todo} index={index} />
              ))}
              <div className="items-footer space-between">
                <div className="item-count">{`${PICount} item${PICount === 1 ? '' : 's'} left`}</div>
                <div className="desktop">
                  <FilterButtons />
                </div>
                <div className="clear-completed">
                  <button onClick={() => dispatch(clearCompleted())} className={`pointer`}>
                    Clear Completed
                  </button>
                </div>
              </div>
            </div>

            <div className="mobile filter-wrapper">
              <FilterButtons />
            </div>
          </div>
        </main>

        <Footer />
      </section>
    </DndProvider>
  );
};

export default TodoComponent;
