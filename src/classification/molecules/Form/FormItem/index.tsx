import React, { FC } from "react";
import { Form } from "antd";
import { Rule } from "antd/lib/form";

interface props {
  label?: React.ReactNode;
  name?: string | number;
  rules?: Rule[];
  children?: React.ReactNode;
}

export const FormItem: FC<props> = ({ label, name, rules, children }) => {
  return (
    <Form.Item label={label} name={name} rules={rules}>
      {children}
    </Form.Item>
  );
};
