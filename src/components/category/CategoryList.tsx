import React from "react";
import "../../styles/category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import { useAppSelector } from "../../redux/store/redux.store";

const CategoryList = () => {
  const { categories, tasks } = useAppSelector((state) => state.todos);

  return (
    <div className={"td-container"}>
      <div className={"task-container"}>
        <p>Here will appear all category</p>
        <Tooltip tooltip={"Add New Category"} placement={"top"}>
          <button className={"btn-grad add-button"}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </Tooltip>
      </div>
    </div>
  );
};

export default CategoryList;
