import React, { FC, useState } from "react";
import { TodoHome } from "../../templates/TodoHome";
import { todo } from "../../../models/todo";
// @ts-ignore
import { v4 as uuid } from "uuid";
import { Form as AntForm } from "antd";

export const Home: FC = () => {
  const [pendingList, setPendingList] = useState<todo[]>([]);
  const [completedList, setCompletedList] = useState<todo[]>([]);
  const [formInstance] = AntForm.useForm();

  // add as a new item
  const addTodoHandler = (values: todo): void => {
    setPendingList([
      ...pendingList,
      { id: uuid(), delay: 1, title: values.title, type: values.type },
    ]);
    formInstance.resetFields();
  };

  // delete an existing item
  const completeTodoHandler = (value: {
    isFromPending: boolean;
    todo: todo;
  }): void => {
    if (value.isFromPending) {
      setPendingList(pendingList.filter((i) => i.id !== value.todo.id));
    } else {
      setCompletedList(completedList.filter((i) => i.id !== value.todo.id));
    }
  };

  // make an item complete
  const moveToCompleteHandler = (todo: todo): void => {
    setCompletedList([...completedList, todo]);
    setPendingList(pendingList.filter((i) => i.id !== todo.id));
    console.log("@moveToCompleteHandler-pending", pendingList);
    console.log("@moveToCompleteHandler-complete", completedList);
  };

  // undo completed item
  const undoCompleteHandler = (todo: todo): void => {
    setCompletedList(completedList.filter((i) => i.id !== todo.id));
    setPendingList([...pendingList, todo]);

    console.log("@moveToCompleteHandler-pending", pendingList);
    console.log("@moveToCompleteHandler-complete", completedList);
  };
  return (
    <TodoHome
      pending={pendingList}
      completed={completedList}
      addTodoHandler={addTodoHandler}
      completeTodoHandler={completeTodoHandler}
      moveToCompleteHandler={moveToCompleteHandler}
      undoCompleteHandler={undoCompleteHandler}
      formInstance={formInstance}
    />
  );
};
