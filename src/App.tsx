import React from "react";
import "./app.less";
import { CheckOutlined } from "@ant-design/icons";
import { Button } from "./classification/atoms/Button";

function App() {
  return (
    <section className="card">
      <Button type="primary">Primary Button</Button>
      <Button
        type="primary"
        shape="circle"
        size="large"
        icon={<CheckOutlined />}
      ></Button>
    </section>
  );
}

export default App;
