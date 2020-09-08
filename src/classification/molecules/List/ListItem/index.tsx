import React, { FC } from "react";
import { Text } from "../../../atoms/Text";
import classNames from "./style.module.scss";

interface props {
  title?: string;
  type?: "music" | "sport" | "shopping" | "other" | undefined;
}

export const ListItem: FC<props> = ({ title, type }) => {
  return (
    <li
      className={`${classNames.listItem} ${
        type === "music"
          ? `${classNames.music}`
          : type === "sport"
          ? `${classNames.sport}`
          : type === "shopping"
          ? `${classNames.shopping}`
          : `${classNames.other}`
      } flex flex-col bg-white min-h-62 p-4 my-4 relative`}
    >
      <Text>{title}</Text>
      <Text classes={`${classNames.type} font-light`}>{type}</Text>
    </li>
  );
};
