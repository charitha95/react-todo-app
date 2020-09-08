import React, { FC } from "react";
import { motion } from "framer-motion";
import classNames from "./style.module.scss";

interface props {
  children?: React.ReactNode;
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const List: FC<props> = ({ children }) => {
  return (
    <motion.ul
      className={`${classNames.container}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.ul>
  );
};
