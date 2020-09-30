import React, { Component } from "react";
import Main from "./main/main";
import Contacts from "./contacts/contacts";
import Posts from "./post/posts";
import ImageGridList from "./photos/photos";
import Header from "./header/header";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

export const MENU = [
  {
    title: "Главная",
    path: "/",
    component: Main,
    exact: true,
  },
  {
    title: "Изображения",
    path: "/photos",
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
      <Router>
        <div>
          <Header />
          <Switch>
            {MENU.map(({ path, component, exact = false }) => (
              <Route
                path={path}
                exact={exact}
                component={component}
              />
            ))}
            <Route path="/" exact render={() => <Redirect to="/main" />} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
