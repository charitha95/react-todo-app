import React from "react";
import "./app.less";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "./classification/atoms/Button";
import { List } from "./classification/molecules/List";
import { ListItem } from "./classification/molecules/List/ListItem";

function App() {
  const asd = [
    { key: "0", delay: 1, title: "Do voice training", type: "music" },
    { key: "1", delay: 2, title: "Go to the gym", type: "sport" },
    { key: "2", delay: 3, title: "Visit parents", type: "other" },
    { key: "3", delay: 4, title: "Buy vegetables", type: "shopping" },
  ];

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
        {asd.map((item, i) => (
          <ListItem
            key={i}
            delay={item.delay}
            title={item.title}
            type={item.type}
          >
            <Button
              type="primary"
              shape="circle"
              size="large"
              icon={<CheckOutlined />}
              classes="mr-2"
            ></Button>
            <Button
              type="primary"
              shape="circle"
              size="large"
              icon={<CloseOutlined />}
            ></Button>
          </ListItem>
        ))}
      </List>
    </section>
  );
}

export default App;
