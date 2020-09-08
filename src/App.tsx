import React from "react";
import "./app.less";
import "./style.scss";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Button } from "./classification/atoms/Button";
import { List } from "./classification/molecules/List";
import { ListItem } from "./classification/molecules/List/ListItem";
import { Header } from "./classification/organisms/Header";
import { Action } from "./classification/organisms/Action";

function App() {
  const asd = [
    { key: "0", delay: 1, title: "Do voice training", type: "music" },
    { key: "1", delay: 2, title: "Go to the gym", type: "sport" },
    { key: "2", delay: 3, title: "Visit parents", type: "other" },
    { key: "3", delay: 4, title: "Buy vegetables", type: "shopping" },
  ];

  return (
    <section className="outter-container">
      <div className="outter-card">
        <section className="header-section">
          <Header pending={2} completed={3} />
        </section>
        <section className="action-section">
          <Action />
        </section>
        <main className="item-section">
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
        </main>
      </div>
    </section>
  );
}

export default App;
