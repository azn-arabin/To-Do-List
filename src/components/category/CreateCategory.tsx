import React, { useState } from "react";
import CategoryForm from "./CategoryForm";
import { useAppDispatch } from "../../redux/store/redux.store";
import { createCategory } from "../../redux/actions/task.action";
import { toast } from "react-toastify";

interface CreateCtgProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateCategory: React.FC<CreateCtgProps> = ({ modal, setModal }) => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    dispatch(createCategory(name));
    toast.success("Successfully created a new category", {
      theme: "colored",
      position: toast.POSITION.BOTTOM_RIGHT,
    });
    setModal(false);
  };

  return (
    <CategoryForm
      name={name}
      handleSubmit={handleSubmit}
      handleChange={setName}
      btnTxt={"Create Category"}
      titleTxt={"Create New Category"}
      modal={modal}
      setModal={setModal}
    />
  );
};

export default CreateCategory;
