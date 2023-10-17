import React from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../redux/store/redux.store";
import { changeSelectedCategory } from "../../redux/actions/task.action";
import SearchBar from "./SearchBar";

interface SearchBarProps {
  onChange: (value: string) => void;
}
const FilterTasks: React.FC<SearchBarProps> = ({ onChange }) => {
  const dispatch = useAppDispatch();
  const categories = useAppSelector((state) => state.todos.categories);
  const { selectedCategory } = useAppSelector((state) => state.todos);
  const handleDropDown = (value: string) => {
    dispatch(changeSelectedCategory(value));
  };

  return (
    <div className={"filter-task"}>
      <Dropdown className={"dp-ctg"}>
        <Dropdown.Toggle className={"toggle-btn"} id="dropdown-basic">
          <FontAwesomeIcon icon={faListUl} /> {selectedCategory}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleDropDown("All Categories")}>
            All Categories
          </Dropdown.Item>
          {categories.map((category, id) => (
            <Dropdown.Item key={id} onClick={() => handleDropDown(category)}>
              {category}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <div className={"flt-search"}>
        <SearchBar onChange={onChange} />
      </div>
    </div>
  );
};

export default FilterTasks;
