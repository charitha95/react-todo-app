import React, { FC } from "react";
import { Header } from "../../organisms/Header";
import { Action } from "../../organisms/Action";
import { Main } from "../../organisms/Main";
import classNames from "./style.module.scss";

interface todo {
  title?: string;
  type?: "music" | "sport" | "shopping" | "other" | undefined | string;
  delay?: number;
  isComplete?: boolean;
}

interface props {
  completed: todo[];
  pending: todo[];
}

export const TodoHome: FC<props> = ({ pending, completed }) => {
  return (
    <section className={`${classNames.outterContainer}`}>
      <div className={`${classNames.outterCard}`}>
        <section className={`${classNames.headerSection}`}>
          <Header pending={2} completed={3} />
        </section>
        <section className={`${classNames.actionSection}`}>
          <Action />
        </section>
        <main className={`${classNames.itemSection}`}>
          <Main pending={pending} completed={completed} />
        </main>
      </div>
    </section>
  );
};
