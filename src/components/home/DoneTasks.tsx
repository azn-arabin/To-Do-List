import React from "react";
import { useAppSelector } from "../../redux/store/redux.store";

const DoneTasks = () => {
  const { tasks, selectedCategory } = useAppSelector((state) => state.todos);

  return (
    <div>
      <p>Done task will be in here</p>
    </div>
  );
};

export default DoneTasks;
