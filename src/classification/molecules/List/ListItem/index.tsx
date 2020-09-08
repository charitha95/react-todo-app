import React, { FC } from "react";
import { Text } from "../../../atoms/Text";
import classNames from "./style.module.scss";

interface props {
  title?: string;
  type?: string;
}

export const ListItem: FC<props> = ({ title, type }) => {
  return (
    <li className={`${classNames.listItem} ${type} `}>
      <Text>{title}</Text>
      <Text>{type}</Text>
    </li>
  );
};
