import React from "react";
import "../../styles/category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";

const CategoryList = () => {
  return (
    <div className={"td-container"}>
      <div className={"category-container"}>
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
