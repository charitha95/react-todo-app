import React, { FC } from "react";
import { Header } from "../../organisms/Header";
import { Action } from "../../organisms/Action";
import { Main } from "../../organisms/Main";
import classNames from "./style.module.scss";
import { todo } from "../../../models/todo";

interface props {
  completed: todo[];
  pending: todo[];
  addTodoHandler: React.MouseEventHandler<HTMLElement> | undefined;
  completeTodoHandler: Function;
  moveToCompleteHandler: Function;
}

export const TodoHome: FC<props> = ({
  pending,
  completed,
  addTodoHandler,
  completeTodoHandler,
  moveToCompleteHandler,
}) => {
  const titleValidation = [
    {
      required: true,
      message: "Please enter a title",
    },
  ];
  const typeValidation = [
    {
      required: true,
      message: "Please select a type",
    },
  ];

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <section className={`${classNames.outterContainer}`}>
      <div className={`${classNames.outterCard}`}>
        <section className={`${classNames.headerSection}`}>
          <Header pending={2} completed={3} />
        </section>
        <section className={`${classNames.actionSection}`}>
          <Action
            onFinish={addTodoHandler}
            onFinishFailed={onFinishFailed}
            typeValidation={typeValidation}
            titleValidation={titleValidation}
          />
        </section>
        <main className={`${classNames.itemSection}`}>
          <Main
            pending={pending}
            completed={completed}
            completeTodoHandler={completeTodoHandler}
            moveToCompleteHandler={moveToCompleteHandler}
          />
        </main>
      </div>
    </section>
  );
};
