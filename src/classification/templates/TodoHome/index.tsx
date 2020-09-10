import React, { FC } from "react";
import { Header } from "../../organisms/Header";
import { Action } from "../../organisms/Action";
import { Main } from "../../organisms/Main";
import classNames from "./style.module.scss";
import { todo } from "../../../models/todo";
import { motion } from "framer-motion";

interface props {
  completed: todo[];
  pending: todo[];
  addTodoHandler: React.MouseEventHandler<HTMLElement> | undefined;
  completeTodoHandler: Function;
  moveToCompleteHandler: Function;
  undoCompleteHandler: Function;
  formInstance?: any;
}

export const TodoHome: FC<props> = ({
  pending,
  completed,
  addTodoHandler,
  completeTodoHandler,
  moveToCompleteHandler,
  undoCompleteHandler,
  formInstance,
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

  const headerVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  const actionVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.4,
      },
    },
  };

  const mainVariant = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
      },
    },
  };

  return (
    <section
      className={`${classNames.outterContainer} m-6 lg:m-auto lg:mt-16 max-w-6xl`}
    >
      <div className={`${classNames.outterCard}`}>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={headerVariant}
          className={`${classNames.headerSection}`}
        >
          <Header pending={pending.length} completed={completed.length} />
        </motion.section>
        <motion.section
          initial="hidden"
          animate="visible"
          variants={actionVariant}
          className={`${classNames.actionSection}`}
        >
          <Action
            onFinish={addTodoHandler}
            onFinishFailed={onFinishFailed}
            typeValidation={typeValidation}
            titleValidation={titleValidation}
            formInstance={formInstance}
          />
        </motion.section>
        <motion.main
          initial="hidden"
          animate="visible"
          variants={mainVariant}
          className={`${classNames.itemSection}`}
        >
          <Main
            pending={pending}
            completed={completed}
            completeTodoHandler={completeTodoHandler}
            moveToCompleteHandler={moveToCompleteHandler}
            undoCompleteHandler={undoCompleteHandler}
          />
        </motion.main>
      </div>
    </section>
  );
};
