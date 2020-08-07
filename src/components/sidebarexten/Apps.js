import React from 'react'
import { Link } from 'react-router-dom'
function Apps() {
    return (
        <div className="open" id="apps">
            <ul>
                <li className="navigation-divider">Web Apps</li>
                <li>
                    <Link to="chat.html">
                        <span>Chat</span>
                        <span className="badge badge-danger">5</span>
                    </Link>
                </li>
                <li>
                    <Link to="inbox.html">
                        <span>Mail</span>
                    </Link>
                </li>
                <li>
                    <Link to="app-todo.html">
                        <span>Todo</span>
                        <span className="badge badge-warning">2</span>
                    </Link>
                </li>
                <li>
                    <a className="active" href="file-manager.html">
                        <span>File Manager</span>
                    </a>
                </li>
                <li>
                    <Link to="calendar.html">
                        <span>Calendar</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Apps
