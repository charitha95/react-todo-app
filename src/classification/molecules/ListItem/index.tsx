import React, { FC } from "react";

interface props {
  children?: React.ReactNode;
}

export const ListItem: FC<props> = ({ children }) => {
  return <li>{children}</li>;
};
