import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import TodoListContainer from "./features/todoList/TodoListContainer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <Route path="/TodoListContainer">
        <TodoListContainer />
      </Route>
      <Route path="/counter">
        <Counter />
      </Route>
    </Router>
  );
}

export default App;
