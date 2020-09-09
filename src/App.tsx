import React from "react";
import "./app.less";
import "./style.scss";
import { Header } from "./classification/organisms/Header";
import { Action } from "./classification/organisms/Action";
import { Main } from "./classification/organisms/Main";

function App() {
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
          <Main />
        </main>
      </div>
    </section>
  );
}

export default App;
