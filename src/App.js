import React from "react"
import { BrowserRouter , Route,Switch } from "react-router-dom";
import Login from './Views/login'
import Dashboard1 from './Views/dashboard1'
import Register from './Views/register'
import ForgotPassword from './Views/forgotPassword'
// import TopNavLeft from './components/TopNavLeft'
// import SearchIcon from './components/icons/SearchIcon'

import './assets/styles/app.css'
import './assets/styles/bundle.css'
import './assets/styles/prism.css'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/login"><Login /></Route>
      <Route path="/register"><Register /></Route>
      <Route path="/forgot-password"><ForgotPassword /></Route>
      {/* <Route path="/dashboard"><Dashboard /></Route> */}
      {/* <Route path="/TopNavLeft"><TopNavLeft /></Route> */}
      {/* <Route path="/SearchIcon"><SearchIcon /></Route> */}
      <Route path="/dashboard1"><Dashboard1 /></Route>
        <Route path="/"><Login /></Route>       
      </Switch>      
    </BrowserRouter>
  );
}
