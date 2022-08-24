import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home'
import Result from '../pages/result'
import UserList from '../pages/userList'


class Router extends Component {
  render() {
    return (
      <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path='/result/:username' element={<Result />} />
            <Route path='/result/:username/:url' element={<UserList />} />
          </Routes>
      </div>
    )
  }
}

export default Router;
