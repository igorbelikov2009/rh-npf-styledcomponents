import React from "react";
import "./App.css";
import GlobalStyles from "./styles/global";
import AppRouter from "./components/AppRouter";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <GlobalStyles />
    </div>
  );
}

export default App;
