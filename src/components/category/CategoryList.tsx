import React, { useEffect, useState } from "react";
import "../../styles/category.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Tooltip from "../common/Tooltip";
import { useAppDispatch, useAppSelector } from "../../redux/store/redux.store";
import { toast } from "react-toastify";
import { deleteCategory } from "../../redux/actions/task.action";
import SearchBar from "../common/SearchBar";
import CreateCategory from "./CreateCategory";
import EditCategory from "./EditCategory";

const CategoryList = () => {
  const dispatch = useAppDispatch();
  const { categories, tasks } = useAppSelector((state) => state.todos);
  const [renderedCategory, setRenderedCategory] = useState<
    { name: string; amount: number }[]
  >([]);
  const [filteredCtg, setFilteredCtg] = useState<
    { name: string; amount: number }[]
  >([]);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [editName, setEditName] = useState("");

  useEffect(() => {
    // Count occurrences of each category
    const categoryCounts = categories.reduce(
      (counts, category) => {
        counts[category] = tasks.filter(
          (task) => task.category === category,
        ).length;
        return counts;
      },
      {} as Record<string, number>,
    );

    // Create the renderedCategory array
    const categoriesWithCounts = categories.map((category) => ({
      name: category,
      amount: categoryCounts[category] || 0,
    }));

    // Set the state with the renderedCategory array
    setRenderedCategory(categoriesWithCounts);
    setFilteredCtg(categoriesWithCounts);
  }, [categories, tasks]);

  const handleSearchChange = (value: string) => {
    if (value) {
      const filtered = renderedCategory.filter(
        (category) =>
          category.name.toLowerCase().indexOf(value.toLowerCase()) > -1,
      );
      setFilteredCtg(filtered);
    } else {
      setFilteredCtg(renderedCategory);
    }
  };

  return (
    <div className={"td-container"}>
      <div className={"task-container"}>
        <div className={"categories"}>
          <SearchBar onChange={handleSearchChange} />
          {filteredCtg.map((category, id) => (
            <div className={"category"} key={id}>
              <div className={"ctg-titles"}>
                <h4>{category.name}</h4>
                <p>Tasks: {category.amount}</p>
              </div>
              <div className={"ctg-icons"}>
                <Tooltip tooltip={"Edit Category"} placement={"left"}>
                  <div
                    className={"edit-icon"}
                    onClick={() => {
                      setEditModal(true);
                      setEditName(category.name);
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                </Tooltip>
                <Tooltip tooltip={"Delete Category"} placement={"left"}>
                  <div
                    className={"delete-icon"}
                    onClick={() => {
                      toast.success(
                        `Successfully deleted the ${category.name} category`,
                        {
                          theme: "colored",
                          position: toast.POSITION.BOTTOM_RIGHT,
                        },
                      );
                      dispatch(deleteCategory(category.name));
                    }}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </div>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>

        <Tooltip tooltip={"Add New Category"} placement={"top"}>
          <button
            className={"btn-grad add-button"}
            onClick={() => setCreateModal(true)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </Tooltip>
      </div>
      <CreateCategory modal={createModal} setModal={setCreateModal} />
      <EditCategory
        modal={editModal}
        setModal={setEditModal}
        prevName={editName}
      />
    </div>
  );
};

export default CategoryList;
