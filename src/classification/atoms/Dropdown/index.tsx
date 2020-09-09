import React, { FC } from "react";
import { Select } from "antd";
import { SelectValue } from "antd/lib/select";
import classNames from "./style.module.scss";

const { Option } = Select;

interface props {
  onChange?: ((value: SelectValue) => void) | undefined;
  placeholder?: string;
}

export const Dropdown: FC<props> = ({ onChange, placeholder }) => {
  return (
    <Select
      placeholder={placeholder}
      onChange={onChange}
      className={`${classNames.dropdown}`}
    >
      <Option
        className={`${classNames.option} ${classNames.music}`}
        value="music"
      >
        music
      </Option>
      <Option
        className={`${classNames.option} ${classNames.sport}`}
        value="sport"
      >
        sport
      </Option>
      <Option
        className={`${classNames.option} ${classNames.shopping}`}
        value="shopping"
      >
        shopping
      </Option>
      <Option
        className={`${classNames.option} ${classNames.other}`}
        value="other"
      >
        other
      </Option>
    </Select>
  );
};
