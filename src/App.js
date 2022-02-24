import React from "react";
import { Route } from "react-router-dom";
import "./style.css";
import Main from "./Main";
import Review from "./Review";

function App() {
  return (
    <div className="App">
        <Route path="/" exact component={Main} />
        <Route path="/review/:day" component={Review} />
      </div>
  )
}

export default App;
