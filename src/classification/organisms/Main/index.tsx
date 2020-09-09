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
import { todo } from "../../../models/todo";

interface props {
  completed: todo[];
  pending: todo[];
  completeTodoHandler: Function;
  moveToCompleteHandler: Function;
  undoCompleteHandler: Function;
}

export const Main: FC<props> = ({
  completed,
  pending,
  completeTodoHandler,
  moveToCompleteHandler,
  undoCompleteHandler,
}) => {
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
                onClick={() => {
                  moveToCompleteHandler(item);
                }}
              ></Button>
              <Button
                type="primary"
                shape="circle"
                size="large"
                classes="bg-todoDanger border-transparent hover:bg-todoDangerHover"
                icon={<CloseOutlined />}
                onClick={() => {
                  completeTodoHandler({ isFromPending: true, todo: item });
                }}
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
                onClick={() => {
                  undoCompleteHandler(item);
                }}
              ></Button>
              <Button
                type="primary"
                shape="circle"
                size="large"
                classes="bg-todoDanger border-transparent hover:bg-todoDangerHover"
                icon={<CloseOutlined />}
                onClick={() => {
                  completeTodoHandler({ isFromPending: false, todo: item });
                }}
              ></Button>
            </ListItem>
          ))}
        </List>
      </Col>
    </Row>
  );
};
