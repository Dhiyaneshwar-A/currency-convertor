import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header/Header";
import CurrencyConverter from "./components/CurrencyConverter/CurrencyConverter";
import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <div className="main-app">
        <Header />
        <CurrencyConverter />
      </div>
    </Provider>
  );
}

export default App;
