import React from 'react'
import { Link } from 'react-router-dom'
function Pages() {
    return (
        <div className="open" id="pages">
        <ul>
            <li className="navigation-divider">Pages</li>
            <li><Link to="login.html">Login</Link></li>
            <li><Link to="register.html">Register</Link></li>
            <li><Link to="recover-password.html">Recovery Password</Link></li>
            <li><Link to="lock-screen.html">Lock Screen</Link></li>
            <li><Link to="profile.html">Profile</Link></li>
            <li><Link to="timeline.html">Timeline</Link></li>
            <li><Link to="invoice.html">Invoice</Link></li>
            <li><Link to="pricing-table.html">Pricing Table</Link></li>
            <li><Link to="search-result.html">Search Result</Link></li>
            <li>
                <Link to="#">Error Pages</Link>
                <ul>
                    <li><Link to="404.html">404</Link></li>
                    <li><Link to="404-2.html">404 V2</Link></li>
                    <li><Link to="503.html">503</Link></li>
                    <li><Link to="mean-at-work.html">Mean at Work</Link></li>
                </ul>
            </li>
            <li><Link to="blank-page.html">Starter Page</Link></li>
            <li>
                <Link to="#">Email Templates</Link>
                <ul>
                    <li><Link to="email-template-basic.html">Basic</Link></li>
                    <li><Link to="email-template-alert.html">Alert</Link></li>
                    <li><Link to="email-template-billing.html">Billing</Link></li>
                </ul>
            </li>
            <li>
                <Link to="#">Menu Level</Link>
                <ul>
                    <li>
                        <Link to="#">Menu Level</Link>
                        <ul>
                            <li>
                                <Link to="#">Menu Level </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
    )
}

export default Pages
