import React, { FC, ChangeEvent } from "react";
import { Input as AntInput } from "antd";

interface props {
  placeholder?: string;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export const Input: FC<props> = ({ placeholder, onChange }) => {
  return (
    <div>
      <AntInput placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
