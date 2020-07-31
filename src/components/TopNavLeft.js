import React from 'react'
import { Link } from 'react-router-dom'
import TopNavRight from '../components/TopNavRight'

function TopNavLeft() {
    return (
      
        <div className="header">
        
                    <ul className="navbar-nav">           
                      <li className="nav-item navigation-toggler">
                            <Link to="#" className="nav-link" title="Hide navigation">
                                <i data-feather="arrow-left">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5">
                                    </polyline></svg>
                                    </i>
                            </Link>
                        </li>
                        <li className="nav-item navigation-toggler mobile-toggler">
                            <Link to="#" className="nav-link" title="Show navigation">
                                <i data-feather="menu" />
                            </Link>
                        </li>
                      
            
                        <li className="nav-item">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Create</Link>
                            <div className="dropdown-menu">
                                <Link to="#" className="dropdown-item">User</Link>
                                <Link to="#" className="dropdown-item">Category</Link>
                                <Link to="#" className="dropdown-item">Product</Link>
                                <Link to="#" className="dropdown-item">Report</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Apps</Link>
                            <div className="dropdown-menu dropdown-menu-big">
                                <div className="p-3">
                                    <div className="row row-xs">
                                        <div className="col-6">
                                            <Link to="chat.html">
                                                <div className="p-3 border-radius-1 border text-center mb-3">
                                                    <i className="width-23 height-23" data-feather="message-circle"></i>
                                                    <div className="mt-2">Chat</div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="inbox.html">
                                                <div className="p-3 border-radius-1 border text-center mb-3">
                                                    <i className="width-23 height-23" data-feather="mail" />
                                                    <div className="mt-2">Mail</div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="app-todo.html">
                                                <div className="p-3 border-radius-1 border text-center">
                                                    <i className="width-23 height-23" data-feather="check-circle" />
                                                    <div className="mt-2">Todo</div>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="col-6">
                                            <Link to="file-manager.html">
                                                <div className="p-3 border-radius-1 border text-center">
                                                    <i className="width-23 height-23" data-feather="file" />
                                                    <div className="mt-2">File Manager</div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>                          
                        </li>
                        <TopNavRight /> 
                    </ul>                     
                </div>                
           
    )
}

export default TopNavLeft
