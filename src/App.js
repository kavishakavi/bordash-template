import React from "react"
import { BrowserRouter, Route, Switch,useRouteMatch } from "react-router-dom";
import Login from './Views/login'
import Register from './Views/register'
import ForgotPassword from './Views/forgotPassword'
import Dashboard from './Views/dashboard'

import './assets/styles/app.css'
import './assets/styles/bundle.css'
import './assets/styles/prism.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login"><Login /></Route>
        <Route exact path="/register"><Register /></Route>
        <Route exact path="/forgot-password"><ForgotPassword /></Route>        
        <Route  path="/dashboard"><Dashboard /></Route>        
        <Route  path="/"><Login /></Route>
      </Switch>
    </BrowserRouter>
  );
}
