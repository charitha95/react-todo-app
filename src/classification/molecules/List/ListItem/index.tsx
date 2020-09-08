import React, { FC } from "react";
import { Text } from "../../../atoms/Text";
import { motion } from "framer-motion";
import classNames from "./style.module.scss";

interface props {
  title?: string;
  type?: "music" | "sport" | "shopping" | "other" | undefined | string;
  delay?: number;
  isComplete?: boolean;
  children?: React.ReactNode;
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

export const ListItem: FC<props> = ({
  title,
  type,
  delay,
  isComplete,
  children,
}) => {
  return (
    <motion.li
      custom={delay}
      animate="visible"
      variants={variants}
      whileHover={{ scale: 1.04 }}
      className={`${classNames.listItem} ${
        type === "music"
          ? `${classNames.music}`
          : type === "sport"
          ? `${classNames.sport}`
          : type === "shopping"
          ? `${classNames.shopping}`
          : `${classNames.other}`
      } flex justify-between bg-white min-h-62 p-4 my-2 relative`}
    >
      <section className="flex flex-col">
        <Text stroke={isComplete}>{title}</Text>
        <Text classes={`${classNames.type} font-light`}>{type}</Text>
      </section>
      <section className={`${classNames.actions} flex items-center`}>
        {children}
      </section>
    </motion.li>
  );
};
