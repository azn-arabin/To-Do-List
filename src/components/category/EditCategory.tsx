import React, { useEffect, useState } from "react";
import CategoryForm from "./CategoryForm";
import { useAppDispatch } from "../../redux/store/redux.store";
import { updateCategory } from "../../redux/actions/task.action";
import { toast } from "react-toastify";

interface EditCategoryProps {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  prevName: string;
}
const EditCategory: React.FC<EditCategoryProps> = ({
  modal,
  setModal,
  prevName,
}) => {
  const [name, setName] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    setName(prevName);
  }, [prevName]);

  const handleSubmit = () => {
    dispatch(updateCategory({ name: prevName, newName: name }));
    toast.success(`Successfully updated the ${prevName} category`, {
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

export default EditCategory;
