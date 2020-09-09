import React, { FC, useState } from "react";
import { TodoHome } from "../../templates/TodoHome";

interface todo {
  title?: string;
  type?: "music" | "sport" | "shopping" | "other" | undefined | string;
  delay?: number;
  isComplete?: boolean;
}

export const Home: FC = () => {
  const [pendingList, setPendingList] = useState<todo[]>([]);
  const [completedList, setCompletedList] = useState<todo[]>([]);

  const addTodoHandler = (values: todo) => {
    setPendingList([
      ...pendingList,
      { delay: 1, title: values.title, type: values.type },
    ]);
  };

  return (
    <TodoHome
      pending={pendingList}
      completed={completedList}
      addTodoHandler={addTodoHandler}
    />
  );
};
