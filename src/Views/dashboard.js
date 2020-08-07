import React from 'react'
import Main from './main'
import Footer from './Footer'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import Alert from '../components/content/alert'
import Accordion from '../components/content/accordion'
import BaseNav from '../components/Navigation/BaseNav'
import Header from './header'
import Sidebar from './sidebar'
import Sidebarexten from './Sidebarexten'
import { Link } from 'react-router-dom'
import LogoPNG from '../assets/media/image/logo.png'

import UIelement from '../components/sidebarexten/UIelement'
import Apps from '../components/sidebarexten/Apps'
import Pages from '../components/sidebarexten/Pages'


export default function Dashboard() {
  const { path } = useRouteMatch()
  return (
    <div className="body">
      <Header />
      <div id="main">

        <div className="navigation">
          <Sidebar />

          <Main /> 
              
        </div>      
      </div>
      <Switch>
        <Route path={path + "/alert"}><Alert /></Route>
        <Route path={path + "/accordion"}><Accordion /></Route>
      </Switch>
      <Footer />
    </div>

  )
}


