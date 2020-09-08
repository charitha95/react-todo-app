import React from "react";
import { FormItem } from ".";
import { Form } from "..";
import { Input } from "../../../atoms/Input";

export default {
  title: "Molecules/Form",
  component: FormItem,
};

export const Horizontal = () => {
  return (
    <Form>
      <FormItem label="Username" name="username">
        <Input placeholder="default input" />
      </FormItem>
    </Form>
  );
};

export const Inline = () => {
  return (
    <Form layout="inline">
      <FormItem label="Username" name="username">
        <Input placeholder="default input" />
      </FormItem>
    </Form>
  );
};

export const Vertical = () => {
  return (
    <Form layout="vertical">
      <FormItem label="Username" name="username">
        <Input placeholder="default input" />
      </FormItem>
    </Form>
  );
};

export const Required = () => {
  return (
    <Form layout="vertical">
      <FormItem
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input placeholder="default input" />
      </FormItem>
    </Form>
  );
};
