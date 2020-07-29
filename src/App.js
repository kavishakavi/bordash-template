import React from "react";
import {
  BrowserRouter, Switch, Route,
} from "react-router-dom";
import Login from './container/login'
import Dashboard from './container/dashboard'
import Register from './container/register'
import ForgotPassword from './container/forgotPassword'

import './assets/styles/app.css'
import './assets/styles/bundle.css'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/dashboard"><Dashboard /></Route>
        <Route path="/register"><Register /></Route>
        <Route path="/forgot-password"><ForgotPassword /></Route>
        <Route path="/login"><Login /></Route>
        <Route path="/"><Login /></Route>
      </Switch>
    </BrowserRouter>
  );
}
