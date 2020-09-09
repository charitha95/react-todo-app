import React, { FC } from "react";
import { Row, Col } from "antd";
import { List } from "../../molecules/List";
import { ListItem } from "../../molecules/List/ListItem";
import { Button } from "../../atoms/Button";
import { motion } from "framer-motion";
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
  const imageVariant = {
    hidden: { y: 0, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.2,
      },
    },
  };

  return (
    <Row>
      <Col xs={24} xl={12}>
        <h2 className="text-lg">Todo</h2>
        <List classes="h-78 overflow-auto">
          {pending.length ? (
            pending.map((item, i) => (
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
            ))
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariant}
              className="w-2/4 m-auto h-full bg-contain bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://ouch-cdn.icons8.com/preview/613/6313ebf7-2100-42e1-8699-1aec856c5197.png)",
                backgroundPosition: "50%",
              }}
              data-v-f4492086=""
            ></motion.div>
          )}
        </List>
      </Col>
      <Col xs={24} xl={12}>
        <h2 className="text-lg">Completed</h2>
        <List classes="h-78 overflow-auto">
          {completed.length ? (
            completed.map((item, i) => (
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
            ))
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={imageVariant}
              className="w-2/4 m-auto h-full bg-contain bg-no-repeat"
              style={{
                backgroundImage:
                  "url(https://ouch-cdn.icons8.com/preview/243/94dc6903-4f7a-4252-beb1-e4bb196e85fe.png)",
                backgroundPosition: "50%",
              }}
              data-v-f4492086=""
            ></motion.div>
          )}
        </List>
      </Col>
    </Row>
  );
};
