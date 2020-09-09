import React, { FC, useState } from "react";
import { TodoHome } from "../../templates/TodoHome";
import { todo } from "../../../models/todo";
// @ts-ignore
import { v4 as uuid } from "uuid";

export const Home: FC = () => {
  const [pendingList, setPendingList] = useState<todo[]>([]);
  const [completedList, setCompletedList] = useState<todo[]>([]);

  // add as a new item
  const addTodoHandler = (values: todo): void => {
    setPendingList([
      ...pendingList,
      { id: uuid(), delay: 1, title: values.title, type: values.type },
    ]);
  };

  // delete an existing item
  const completeTodoHandler = (todo: todo): void => {
    alert("deleting");
    // setCompletedList([...completedList, todo]);
  };

  // make an item complete
  const moveToCompleteHandler = (todo: todo): void => {
    setCompletedList([...completedList, todo]);
  };

  return (
    <TodoHome
      pending={pendingList}
      completed={completedList}
      addTodoHandler={addTodoHandler}
      completeTodoHandler={completeTodoHandler}
      moveToCompleteHandler={moveToCompleteHandler}
    />
  );
};
