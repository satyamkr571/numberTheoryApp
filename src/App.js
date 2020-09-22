import React from "react";
import "./App.css";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Dashboard} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
