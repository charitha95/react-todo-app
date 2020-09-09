import React, { FC } from "react";
import { Button as AntButton } from "antd";
import { ButtonType, ButtonShape } from "antd/lib/button";
import { SizeType } from "antd/lib/config-provider/SizeContext";
import { ButtonHTMLType } from "antd/lib/button/button";

interface props {
  type: ButtonType;
  children?: React.ReactNode;
  shape?: ButtonShape;
  icon?: React.ReactNode;
  classes?: string;
  size?: SizeType;
  htmlType?: ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement> | undefined;
}

export const Button: FC<props> = ({
  type,
  shape,
  icon,
  children,
  htmlType,
  onClick,
  classes,
}) => {
  return (
    <AntButton
      type={type}
      shape={shape}
      icon={icon}
      htmlType={htmlType}
      onClick={onClick}
      className={`${classes}`}
    >
      {children}
    </AntButton>
  );
};
