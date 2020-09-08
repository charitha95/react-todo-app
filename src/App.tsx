import React from "react";
import "./app.less";
import { CheckOutlined } from "@ant-design/icons";
import { Button } from "./classification/atoms/Button";
import { List } from "./classification/molecules/List";
import { ListItem } from "./classification/molecules/List/ListItem";

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
      <List>
        <ListItem title="My Task List" type="music">
          sss
        </ListItem>
        <ListItem title="My Task List" type="sport">
          sss
        </ListItem>
        <ListItem title="My Task List" type="other">
          sss
        </ListItem>
      </List>
    </section>
  );
}

export default App;
