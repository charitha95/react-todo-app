import React, { FC } from "react";
import classNames from "./style.module.scss";
import { Text } from "../../../atoms/Text";
import { motion } from "framer-motion";

interface props {
  title?: string;
  type?: "music" | "sport" | "shopping" | "other" | undefined | string;
  delay?: number;
}

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
    },
  }),
  hidden: { y: 20, opacity: 0 },
};

export const ListItem: FC<props> = ({ title, type, delay }) => {
  return (
    <motion.li
      custom={delay}
      animate="visible"
      variants={variants}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.99 }}
      className={`${classNames.listItem} ${
        type === "music"
          ? `${classNames.music}`
          : type === "sport"
          ? `${classNames.sport}`
          : type === "shopping"
          ? `${classNames.shopping}`
          : `${classNames.other}`
      } flex flex-col bg-white min-h-62 p-4 my-2 relative`}
    >
      <Text>{title}</Text>
      <Text classes={`${classNames.type} font-light`}>{type}</Text>
    </motion.li>
  );
};
