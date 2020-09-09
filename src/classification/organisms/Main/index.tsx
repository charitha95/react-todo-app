import React, { FC } from "react";
import { Row, Col } from "antd";
import { List } from "../../molecules/List";
import { ListItem } from "../../molecules/List/ListItem";
import { Button } from "../../atoms/Button";
import {
  CheckOutlined,
  CloseOutlined,
  RollbackOutlined,
} from "@ant-design/icons";

interface props {}

export const Main: FC<props> = () => {
  const list = [
    { key: "0", delay: 1, title: "Do voice training", type: "music" },
    { key: "1", delay: 2, title: "Go to the gym", type: "sport" },
    { key: "2", delay: 3, title: "Visit parents", type: "other" },
    { key: "3", delay: 4, title: "Buy vegetables", type: "shopping" },
    { key: "4", delay: 4, title: "Buy vegetables", type: "shopping" },
    { key: "5", delay: 5, title: "Buy vegetables", type: "shopping" },
    { key: "6", delay: 6, title: "Buy vegetables", type: "shopping" },
    { key: "7", delay: 7, title: "Buy vegetables", type: "shopping" },
    { key: "8", delay: 8, title: "Buy vegetables", type: "shopping" },
  ];

  return (
    <Row>
      <Col xs={24} xl={12}>
        <List classes="h-78 overflow-auto">
          {list.map((item, i) => (
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
                classes="mr-2 bg-todoSuccess border-transparent hover:bg-todoSuccessHover"
              ></Button>
              <Button
                type="primary"
                shape="circle"
                size="large"
                classes="bg-todoDanger border-transparent hover:bg-todoDangerHover"
                icon={<CloseOutlined />}
              ></Button>
            </ListItem>
          ))}
        </List>
      </Col>
      <Col xs={24} xl={12}>
        <List classes="h-78 overflow-auto">
          {list.map((item, i) => (
            <ListItem
              key={i}
              delay={item.delay}
              title={item.title}
              type={item.type}
              isComplete
            >
              <Button
                type="primary"
                shape="circle"
                size="large"
                icon={<RollbackOutlined />}
                classes="mr-2 bg-todoSuccess border-transparent hover:bg-todoSuccessHover"
              ></Button>
              <Button
                type="primary"
                shape="circle"
                size="large"
                classes="bg-todoDanger border-transparent hover:bg-todoDangerHover"
                icon={<CloseOutlined />}
              ></Button>
            </ListItem>
          ))}
        </List>
      </Col>
    </Row>
  );
};
