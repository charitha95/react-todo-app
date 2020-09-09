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

interface todo {
  title?: string;
  type?: "music" | "sport" | "shopping" | "other" | undefined | string;
  delay?: number;
  isComplete?: boolean;
}

interface props {
  completed: todo[];
  pending: todo[];
}

export const Main: FC<props> = ({ completed, pending }) => {
  return (
    <Row>
      <Col xs={24} xl={12}>
        <h2 className="text-lg">Todo</h2>
        <List classes="h-78 overflow-auto">
          {pending.map((item, i) => (
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
        <h2 className="text-lg">Completed</h2>
        <List classes="h-78 overflow-auto">
          {completed.map((item, i) => (
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
