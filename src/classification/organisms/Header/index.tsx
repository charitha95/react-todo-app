import React, { FC } from "react";
import { format } from "date-fns";

interface props {
  pending: number;
  completed: number;
}

export const Header: FC<props> = ({ completed, pending }) => {
  return (
    <header className="flex justify-between border-b-2 border-gray-400 pb-4">
      <section>
        <div className="flex items-center font-semibold">
          <h1 className="text-4xl m-0">Welcome </h1>
          <span className="ml-2 mt-3">to charitha's todo list</span>
        </div>
        <label className="text-xl font-semibold">
          {format(new Date(), "LLLL d, yyyy")}
        </label>
      </section>
      <section className="flex items-center">
        <h1 className="text-4xl m-0">{completed} </h1>
        <span className="ml-2 mt-3 text-gray-500 font-semibold">
          /{completed + pending}
        </span>
      </section>
    </header>
  );
};
