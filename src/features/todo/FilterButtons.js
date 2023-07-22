import { useDispatch, useSelector } from "react-redux";
import { selectFilter, setFilter } from "./todoSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();

  const selectedFilter = useSelector(selectFilter);

  const filterItems = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <ul className="filters">
      <li>
        <button
          onClick={() => filterItems("all")}
          className={`pointer ${selectedFilter === "all" ? "active" : ""}`}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => filterItems("active")}
          className={`pointer ${selectedFilter === "active" ? "active" : ""}`}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => filterItems("completed")}
          className={`pointer ${
            selectedFilter === "completed" ? "active" : ""
          }`}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default FilterButtons;
