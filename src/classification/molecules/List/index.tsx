import React, { FC } from "react";

interface props {
  children?: React.ReactNode;
}

export const List: FC<props> = ({ children }) => {
  return <ul>{children}</ul>;
};
