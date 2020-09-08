import React from "react";

export const Header = () => {
  return (
    <header className="flex justify-between">
      <section>
        <div className="flex items-center font-semibold">
          <h1 className="text-4xl m-0">Welcome </h1>
          <span className="ml-2 mt-3">to charitha's todo list</span>
        </div>
        <label className="text-xl font-semibold">04 september 2020</label>
      </section>
      <section className="flex items-center">
        <h1 className="text-4xl m-0">04 </h1>
        <span className="ml-2 mt-3 text-gray-500 font-semibold">/10</span>
      </section>
    </header>
  );
};
