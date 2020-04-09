import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import "./App.css";
import CoursesPage from "./components/CoursesPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
