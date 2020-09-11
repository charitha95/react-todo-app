import React, { FC } from "react";
import { Typography } from "antd";

interface props {
  type?: "secondary" | "success" | "warning" | "danger" | undefined;
  stroke?: boolean;
  strong?: boolean;
  children?: React.ReactNode;
  classes?: string;
}

export const Text: FC<props> = ({
  type,
  stroke,
  strong,
  classes,
  children,
}) => {
  return (
    <Typography.Text
      type={type}
      delete={stroke}
      className={`${classes || ""}`}
      strong={strong}
    >
      {children}
    </Typography.Text>
  );
};
