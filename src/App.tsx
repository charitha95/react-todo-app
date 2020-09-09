import React from "react";
import "./app.less";
import "./style.scss";
import { TodoHome } from "./classification/templates/TodoHome";

function App() {
  const pending = [
    { key: "0", delay: 1, title: "Do voice training", type: "music" },
    { key: "1", delay: 2, title: "Go to the gym", type: "sport" },
    { key: "2", delay: 3, title: "Visit parents", type: "other" },
    { key: "3", delay: 4, title: "Buy vegetables", type: "shopping" },
  ];
  const completed = [
    { key: "4", delay: 4, title: "Buy vegetables", type: "shopping" },
    { key: "5", delay: 5, title: "Buy vegetables", type: "shopping" },
    { key: "6", delay: 6, title: "Buy vegetables", type: "shopping" },
    { key: "7", delay: 7, title: "Buy vegetables", type: "shopping" },
    { key: "8", delay: 8, title: "Buy vegetables", type: "shopping" },
    { key: "9", delay: 9, title: "Buy vegetables", type: "shopping" },
    { key: "10", delay: 10, title: "Buy vegetables", type: "shopping" },
  ];
  return <TodoHome pending={pending} completed={completed} />;
}

export default App;
