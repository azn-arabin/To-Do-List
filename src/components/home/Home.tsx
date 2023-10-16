import React, { useState } from "react";
import "../../styles/home.css";
import { PlusOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import CreateTask from "../perform-task/CreateTask";

const Home: React.FC = () => {
  const [addModal, setAddModal] = useState(false);

  return (
    <div className={"home"}>
      <div className={"task-container"}>
        All of task will be in here
        <Tooltip placement="top" title="Add New Task" arrow>
          <button
            className={"btn-grad add-button"}
            onClick={() => setAddModal(true)}
          >
            <PlusOutlined />
          </button>
        </Tooltip>
      </div>
      <CreateTask modal={addModal} setModal={setAddModal} />
    </div>
  );
};

export default Home;
