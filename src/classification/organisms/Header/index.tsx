import React, { FC, useEffect } from "react";
import { format } from "date-fns";
import { motion, useAnimation, transform } from "framer-motion";

interface props {
  pending: number;
  completed: number;
}

export const Header: FC<props> = ({ completed, pending }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: 1,
      transition: {
        type: "spring",
        velocity: transform([0, 5], [150, 0])(0),
        stiffness: 700,
        damping: 80,
      },
    });
  }, [completed, controls]);

  return (
    <header className="flex flex-col lg:flex-row justify-between border-b-2 border-gray-400 pb-4 ">
      <section className="flex flex-col items-center  lg:items-start ">
        <div className="flex flex-col md:flex-row lg:flex-row  items-center font-semibold">
          <h1 className="text-4xl m-0">Welcome </h1>
          <span className="ml-2 mt-3">to charitha's todo list</span>
        </div>
        <label className="text-xl font-semibold sm:mt-4 md:mt-0 lg:mt-0">
          {format(new Date(), "LLLL d, yyyy")}
        </label>
      </section>
      <section className="flex items-center justify-center">
        <motion.h1 animate={controls} className="text-4xl m-0">
          {completed}{" "}
        </motion.h1>
        <span className="ml-2 mt-3 text-gray-500 font-semibold">
          /{completed + pending}
        </span>
      </section>
    </header>
  );
};
