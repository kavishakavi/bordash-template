import React from 'react'
import { Link } from 'react-router-dom'
import LogoPNG from '../assets/media/image/logo.png'
import Dashboard from '../components/sidebarexten/Dashboard'
import UIelement from '../components/sidebarexten/UIelement'
import Apps from '../components/sidebarexten/Apps'
import Pages from '../components/sidebarexten/Pages'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
function Main() {
    const { path } = useRouteMatch()
    return (

        <div className="navigation-menu-body">

            <div>
                <div id="navigation-logo">
                    <Link to="index.html">
                        <img className="logo" src={LogoPNG} alt="logo" />
                        <img className="logo-light" src="assets/media/image/logo-light.png" alt="light logo" />
                    </Link>
                </div>
            </div>

            <div className="navigation-menu-group">
                <Switch>
                    <Route path={path + "/Dashboard"}><Dashboard /></Route>
                    <Route path={path + "/Apps"}><Apps /></Route>
                    <Route path={path + "/UIelement"}><UIelement /></Route>
                    <Route path={path + "/Pages"}><Pages /></Route>
                </Switch>
            </div>

        </div>

    )
}

export default Main
