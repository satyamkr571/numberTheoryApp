import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import { store } from "./store";
import Navbar from "./components/Navbar/navbar";
import Form from "./components/Forms/index";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navbar />
        <Router>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/task1" component={Dashboard} />
          <Route exact path="/task2" component={Form} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
