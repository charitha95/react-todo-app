import React from "react";
import "./app.less";
import "./style.scss";
import { Header } from "./classification/organisms/Header";
import { Action } from "./classification/organisms/Action";
import { Main } from "./classification/organisms/Main";

function App() {
  const list = [
    { key: "0", delay: 1, title: "Do voice training", type: "music" },
    { key: "1", delay: 2, title: "Go to the gym", type: "sport" },
    { key: "2", delay: 3, title: "Visit parents", type: "other" },
    { key: "3", delay: 4, title: "Buy vegetables", type: "shopping" },
  ];
  const list2 = [
    { key: "4", delay: 4, title: "Buy vegetables", type: "shopping" },
    { key: "5", delay: 5, title: "Buy vegetables", type: "shopping" },
    { key: "6", delay: 6, title: "Buy vegetables", type: "shopping" },
    { key: "7", delay: 7, title: "Buy vegetables", type: "shopping" },
    { key: "8", delay: 8, title: "Buy vegetables", type: "shopping" },
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
          <Main pending={list} completed={list2} />
        </main>
      </div>
    </section>
  );
}

export default App;
