import { useSelector } from "react-redux";
import { selectTodos } from "./todoSlice";
import TodoItem from "./TodoItem";
import Header from "./Header";
import AddItem from "./AddItem";
import Footer from "./Footer";
import { useState } from "react";
import { selectPageConfig } from "../pageConfig/pageConfigSlice";

const TodoComponent = () => {
  const pageConfig = useSelector(selectPageConfig);
  
  const todos = useSelector(selectTodos);
  const [filteredItems, setFilteredItems] = useState(todos);
  const [selectedFilter, setSelectedFilter] = useState("all");

  const filterItems = (c) => {
    switch (c){
      case "all":
        setFilteredItems(todos);
        break;
      case "active":
        setFilteredItems(todos.filter(todo => todo.isActive === true))
        break;
      case "completed":
        setFilteredItems(todos.filter(todo => todo.isCompleted === true))
        break;
      default:
        return
    };
    setSelectedFilter(c);
  }

  const getPendingItemsCount = () => {
    const filter = todos.filter((todo) => todo.isCompleted === false);
    return filter.length;
  }

  const PICount = getPendingItemsCount();
  return (
    <section className={`container ${pageConfig.theme}`}>
      <Header />

      <main className="main">
        <AddItem />

        {filteredItems.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} />;
        })}
        <div className="items-footer space-between">
          <div className="item-count">{`${PICount} item${PICount === 1 ? "" : "s"} left`}</div>
          <ul className="filters">
            <li>
              <button 
                onClick={() => filterItems('all')} 
                className={`pointer ${selectedFilter === "all" ? "active" : ""}`}
                >All</button>
            </li>
            <li>
              <button 
                onClick={() => filterItems('active')} 
                className={`pointer ${selectedFilter === "active" ? "active" : ""}`}
                >Active</button>
            </li>
            <li>
              <button 
                onClick={() => filterItems('completed')} 
                className={`pointer ${selectedFilter === "completed" ? "active" : ""}`}
                >Completed</button>
            </li>
          </ul>
        </div>
      </main>

      <Footer />
    </section>
  );
};

export default TodoComponent;
