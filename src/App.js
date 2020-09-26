import React, { Component } from "react";
import Main from "./main/main";
import Contacts from "./contacts/contacts";
import Posts from "./post/posts";
import ImageGridList from "./images/images";
import Header from "./header/header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export const MENU = [
  {
    title: "Главная",
    path: "/main",
    component: Main,
    exact: true,
  },
  {
    title: "Изображения",
    path: "/images",
    component: ImageGridList,
    exact: true,
  },
  {
    title: "Посты",
    path: "/posts",
    component: Posts,
    exact: true,
  },
  {
    title: "Контакты",
    path: "/contacts",
    component: Contacts,
    exact: true,
  },
];

class App extends Component {
  render() {
    return (
      <Router basename="/react-router/">
        <div>
          <Header />
          <Switch>
            {MENU.map(({ path, component, exact = false }) => (
              <Route path={path} exact={exact} component={component} />
            ))}
            <Route path="/" exact render={() => <Redirect to="/main" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
