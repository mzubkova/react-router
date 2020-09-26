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
    path: "/",
    component: Main,
    exact: true,
  },
  {
    title: "Изображения",
    path: "/images",
    component: ImageGridList,
  },
  {
    title: "Посты",
    path: "/posts",
    component: Posts,
  },
  {
    title: "Контакты",
    path: "/contacts",
    component: Contacts,
  },
];

class App extends Component {
  render() {
    return (
      <Router basename="/react-router/">
        <div>
          <Header />
          <Switch>
            {MENU.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
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
