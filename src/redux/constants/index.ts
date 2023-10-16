export const TASK = {
  CREATE_TASK: "CREATE_TASK" as const,
  UPDATE_TASK: "UPDATE_TASK" as const,
  DELETE_TASK: "DELETE_TASK" as const,
};

export type TaskActionTypes = (typeof TASK)[keyof typeof TASK];