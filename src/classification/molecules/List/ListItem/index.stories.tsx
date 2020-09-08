import React from "react";
import { List } from "../index";
import { ListItem } from ".";
import "../../../../styles/main.scss";

export default {
  title: "Molecules/List",
  component: ListItem,
};

export const Lists = () => (
  <div style={{ background: "#f8f1ea", padding: 10 }}>
    <List>
      <ListItem title="Do voice training" type="music" />
      <ListItem title="Go to the gym" type="sport" />
      <ListItem title="Visit parents" type="other" />
      <ListItem title="Buy vegetables" type="shopping" />
    </List>
  </div>
);
