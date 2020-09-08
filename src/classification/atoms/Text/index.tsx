import React, { FC } from "react";
import { Typography } from "antd";

interface props {
  type?: "secondary" | "success" | "warning" | "danger" | undefined;
  stroke?: boolean;
  strong?: boolean;
  children?: React.ReactNode;
}

export const Text: FC<props> = ({ type, stroke, strong, children }) => {
  return (
    <Typography.Text type={type} delete={stroke} strong={strong}>
      {children}
    </Typography.Text>
  );
};
