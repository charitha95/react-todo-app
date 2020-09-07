import React from "react";
import "./app.less";
import { SearchOutlined } from "@ant-design/icons";
import { Button } from "./classification/atoms/Button/Button";

function App() {
  return (
    <section className="card">
      <Button type="primary">Primary Button</Button>
      <Button
        type="primary"
        shape="round"
        size="large"
        icon={<SearchOutlined />}
      >
        Hellow
      </Button>
    </section>
  );
}

export default App;
