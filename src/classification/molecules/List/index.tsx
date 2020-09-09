import React, { FC } from "react";
import { motion } from "framer-motion";
import classNames from "./style.module.scss";

interface props {
  children?: React.ReactNode;
  classes?: string;
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

export const List: FC<props> = ({ children, classes }) => {
  return (
    <motion.ul
      className={`${classNames.container} ${classes}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.ul>
  );
};
