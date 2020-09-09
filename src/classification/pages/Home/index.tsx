import React, { FC, useState } from "react";
import { TodoHome } from "../../templates/TodoHome";
import { todo } from "../../../models/todo";

export const Home: FC = () => {
  const [pendingList, setPendingList] = useState<todo[]>([]);
  const [completedList, setCompletedList] = useState<todo[]>([]);

  const addTodoHandler = (values: todo) => {
    setPendingList([
      ...pendingList,
      { delay: 1, title: values.title, type: values.type },
    ]);
  };

  const completeTodoHandler = (todo: todo) => {
    console.log(todo);
    // setCompletedList([...completedList, todo]);
  };

  return (
    <TodoHome
      pending={pendingList}
      completed={completedList}
      addTodoHandler={addTodoHandler}
      completeTodoHandler={completeTodoHandler}
    />
  );
};
