import * as React from "react";

import "./App.css";
import CombineLatest from "./components/CombineLatest";

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Template</h1>
      <CombineLatest name="One" />
    </div>
  );
};

export default App;
