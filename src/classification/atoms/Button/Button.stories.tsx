import React from "react";
import { Button } from "./Button";
import { CheckOutlined } from "@ant-design/icons";
// import "../../../app.less";
import "antd/dist/antd.css";

export default {
  title: "Button",
  component: Button,
};

export const Primary = () => <Button type="primary">Primary button</Button>;

export const Circle = () => (
  <Button type="primary" shape="circle" icon={<CheckOutlined />}></Button>
);

export const Rounded = () => (
  <Button type="primary" shape="round" icon={<CheckOutlined />}>
    Rounded button
  </Button>
);
