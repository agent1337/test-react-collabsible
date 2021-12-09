import React from "react";
import { Provider } from "react-redux";
import {store} from "./app/store"
import Accordion from "./components/Accordion";
import InputRegular from "./components/InputRegular";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Accordion />
        <InputRegular />
      </Provider>
    </div>
  );
}

export default App;
