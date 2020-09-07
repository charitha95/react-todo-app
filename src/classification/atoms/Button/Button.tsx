import React, { FC } from "react";
import { Button as AntButton } from "antd";
import { ButtonType, ButtonShape } from "antd/lib/button";
import { SizeType } from "antd/lib/config-provider/SizeContext";

interface props {
  type: ButtonType;
  children?: React.ReactNode;
  shape?: ButtonShape;
  icon?: React.ReactNode;
  classes?: string;
  size?: SizeType;
}

export const Button: FC<props> = ({ type, shape, icon, children, classes }) => {
  return (
    <AntButton type={type} shape={shape} icon={icon} className={`${classes}`}>
      {children}
    </AntButton>
  );
};
