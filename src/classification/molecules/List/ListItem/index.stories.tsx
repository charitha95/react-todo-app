import React from "react";
import { List } from "../index";
import { ListItem } from ".";
import "../../../../styles/main.scss";

export default {
  title: "Molecules/List",
  component: ListItem,
};

export const TodoList = () => (
  <div style={{ background: "#f8f1ea", padding: 10 }}>
    <List>
      <ListItem title="Do voice training" type="music" delay={1} />
      <ListItem title="Go to the gym" type="sport" delay={2} />
      <ListItem title="Visit parents" type="other" delay={3} />
      <ListItem title="Buy vegetables" type="shopping" delay={4} />
    </List>
  </div>
);

export const CompletedList = () => (
  <div style={{ background: "#f8f1ea", padding: 10 }}>
    <List>
      <ListItem title="Do voice training" isComplete type="music" delay={1} />
      <ListItem title="Go to the gym" isComplete type="sport" delay={2} />
      <ListItem title="Visit parents" isComplete type="other" delay={3} />
      <ListItem title="Buy vegetables" isComplete type="shopping" delay={4} />
    </List>
  </div>
);
