import React from "react";
import "../../styles/task.css";
import { Form, Input, Radio } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

interface TaskFromProps {
  formValues: {
    title: string;
    priority: string;
    category: string;
    description: string;
  };
  handleSubmit: (values: any) => void;
}
const TaskForm: React.FC<TaskFromProps> = ({ formValues, handleSubmit }) => {
  return (
    <Form
      className={"form-container"}
      layout="vertical"
      onFinish={handleSubmit}
    >
      <Form.Item
        label="Ttile"
        name="title"
        rules={[
          { required: true, message: "Please enter your task title!" },
          { min: 2, message: "Title must be at least 2 characters!" },
          { max: 50, message: "Maximum 50 characters for title!" },
        ]}
      >
        <Input
          value={formValues.title}
          className={"input"}
          placeholder="Task title..."
        />
      </Form.Item>
      <Form.Item
        label={"Priority"}
        name={"priority"}
        rules={[{ required: true, message: "Please select priority!" }]}
      >
        <Radio.Group value={formValues.priority}>
          <Radio value={"low"}>Low</Radio>
          <Radio value={"medium"}>Medium</Radio>
          <Radio value={"high"}>High</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Category"
        name={"category"}
        rules={[{ required: true, message: "Please enter category!" }]}
      >
        <Input
          value={formValues.category}
          className={"input"}
          placeholder="Task category..."
        />
      </Form.Item>
      <Form.Item
        label={"Description"}
        name={"description"}
        rules={[
          { required: true, message: "Please enter description!" },
          { min: 10, message: "Title must be at least 10 characters!" },
          { max: 200, message: "Maximum 200 characters for title!" },
        ]}
      >
        <TextArea
          placeholder="Description..."
          autoSize={{ minRows: 3, maxRows: 4 }}
          className={"input"}
          value={formValues.description}
        />
      </Form.Item>
      <button
        type={"submit"}
        className={"btn-grad"}
        style={{ marginTop: "10px" }}
      >
        <PlusOutlined /> Create Task
      </button>
    </Form>
  );
};

export default TaskForm;
