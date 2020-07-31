import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import LogoPNG from '../assets/media/image/logo.png'
import women_avatar1 from '../assets/media/image/user/women_avatar1.jpg'
import ChinaPNG from '../assets/media/image/flags/261-china.png'
import Tanzania from '../assets/media/image/flags/003-tanzania.png'
import unitedKingdom from '../assets/media/image/flags/262-united-kingdom.png'
import Tunisia from '../assets/media/image/flags/013-tunisia.png'
import Spain from '../assets/media/image/flags/044-spain.png'



export class dashboard extends Component {
    render() {
        return (                       
        <div className="body">      
            {/* <div class="preloader">
                <div class="preloader-icon"></div>
            </div>
           */}           
         
            <div className="header">            
                <div>
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
                    </ul>
                </div>
            
                <div>
                    <ul className="navbar-nav">
            
                        <li className="nav-item">
                            <Link to="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
                                <img width="18" className="mr-2" src={ChinaPNG}alt="flag" /> China
                            </Link>
                            <div className="dropdown-menu">
                                <Link to="#" className="dropdown-item">
                                    <img width="18" src={Tanzania} className="mr-2" alt="flag" />
                                    Tanzania
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    <img width="18" src={unitedKingdom} className="mr-2"
                                         alt="flag" /> United Kingdom
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    <img width="18" src={Tunisia} className="mr-2" alt="flag" />
                                    Tunisia
                                </Link>
                                <Link to="#" className="dropdown-item">
                                    <img width="18" src={Spain} className="mr-2" alt="flag" /> Spain
                                </Link>
                            </div>
                        </li>
            
                        <li className="nav-item">
                            <Link to="#" className="nav-link" title="Search" data-toggle="dropdown">
                                <i data-feather="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                                </i>
                            </Link>
                            <div className="dropdown-menu p-2 dropdown-menu-right">
                                <form>
                                    <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <div className="input-group-prepend">
                                            <button className="btn" type="button">
                                                <i data-feather="search">                                                    
                                                </i>

                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </li>
                   
            
                  
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link" title="Fullscreen" data-toggle="fullscreen">
                                <i className="maximize" data-feather="maximize">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3">
                                    </path></svg>
                                </i>
                                <i className="minimize" data-feather="minimize">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-minimize minimize"><path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3">
                                    </path></svg>
                                </i>
                            </Link>
                        </li>
                     
            
                     
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link nav-link-notify" title="Chats" data-toggle="dropdown">
                                <i data-feather="message-circle">
                                <Link to="#" className="nav-link nav-link-notify" title="Chats" data-toggle="dropdown" aria-expanded="false">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-message-circle"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                        </path></svg>
                </Link>
                                </i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                                <div className="p-4 text-center d-flex justify-content-between"
                                     data-backround-image="assets/media/image/image1.jpg">
                                    <h6 className="mb-0">Chats</h6>
                                    <small className="font-size-11 opacity-7">2 unread chats</small>
                                </div>
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <li>
                                            <Link to="#" className="list-group-item d-flex hide-show-toggler">
                                                <div>
                                                    <figure className="avatar avatar-sm m-r-15">
                                                        <img src="assets/media/image/user/man_avatar1.jpg"
                                                             className="rounded-circle" alt="user" />
                                                    </figure>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                        Herbie Pallatina
                                                        <i title="Mark as read" data-toggle="tooltip"
                                                           className="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
                                                    </p>
                                                    <div className="small text-muted">
                                                        <span className="mr-2">02:30 PM</span>
                                                        <span>Have you madimage</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"  className="list-group-item d-flex align-items-center hide-show-toggler">
                                                <div>
                                                    <figure className="avatar avatar-sm m-r-15">
                                                        <img src="assets/media/image/user/women_avatar5.jpg"
                                                             className="rounded-circle" alt="user" />
                                                    </figure>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                        Andrei Miners
                                                        <i title="Mark as read" data-toggle="tooltip"
                                                           className="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
                                                    </p>
                                                    <div className="small text-muted">
                                                        <span className="mr-2">08:36 PM</span>
                                                        <span>I have a meetinimage</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="text-divider small pb-2 pl-3 pt-3">
                                            <span>Old chats</span>
                                        </li>
                                        <li>
                                            <Link to="#"
                                               className="list-group-item d-flex align-items-center hide-show-toggler">
                                                <div>
                                                    <figure className="avatar avatar-sm m-r-15">
                                                        <img src="assets/media/image/user/man_avatar3.jpg"
                                                             className="rounded-circle" alt="user" />
                                                    </figure>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                        Kevin added
                                                        <i title="Mark as unread" data-toggle="tooltip"
                                                           className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                    </p>
                                                    <div className="small text-muted">
                                                        <span className="mr-2">11:09 PM</span>
                                                        <span>Have you madimage</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#" className="list-group-item d-flex hide-show-toggler">
                                                <div>
                                                    <figure className="avatar avatar-sm m-r-15">
                                                        <img src="assets/media/image/user/man_avatar2.jpg"
                                                             className="rounded-circle" alt="user" />
                                                    </figure>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                        Eugenio Carnelley
                                                        <i title="Mark as unread" data-toggle="tooltip"
                                                           className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                    </p>
                                                    <div className="small text-muted">
                                                        <span className="mr-2">Yesterday</span>
                                                        <span>I have a meetinimage</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"
                                               className="list-group-item d-flex align-items-center hide-show-toggler">
                                                <div>
                                                    <figure className="avatar avatar-sm m-r-15">
                                                        <img src={women_avatar1}
                                                             className="rounded-circle" alt="user" />
                                                    </figure>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                        Neely Ferdinand
                                                        <i title="Mark as unread" data-toggle="tooltip"
                                                           className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                    </p>
                                                    <div className="small text-muted">
                                                        <span className="mr-2">Yesterday</span>
                                                        <span>I have a meetinimage</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-2 text-right">
                                    <ul className="list-inline small">
                                        <li className="list-inline-item">
                                            <Link to="#">Mark All Read</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
              
            
                    
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link nav-link-notify" title="Notifications" data-toggle="dropdown">
                                <i data-feather="bell">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0">
                                    </path></svg>
                                </i>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                                <div className="p-4 text-center d-flex justify-content-between"
                                     data-backround-image="assets/media/image/image1.jpg">
                                    <h6 className="mb-0">Notifications</h6>
                                    <small className="font-size-11 opacity-7">1 unread notifications</small>
                                </div>
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <li>
                                            <Link to="#" className="list-group-item d-flex hide-show-toggler">
                                                <div>
                                                    <figure className="avatar avatar-sm m-r-15">
                                                            <span className="avatar-title bg-success-bright text-success rounded-circle">
                                                                <i className="ti-user"></i>
                                                            </span>
                                                    </figure>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                        New customer registered
                                                        <i title="Mark as read" data-toggle="tooltip"
                                                           className="hide-show-toggler-item fa fa-circle-o font-size-11"></i>
                                                    </p>
                                                    <span className="text-muted small">20 min ago</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="text-divider small pb-2 pl-3 pt-3">
                                            <span>Old notifications</span>
                                        </li>
                                        <li>
                                            <Link to="#" className="list-group-item d-flex hide-show-toggler">
                                                <div>
                                                    <figure className="avatar avatar-sm m-r-15">
                                                            <span className="avatar-title bg-warning-bright text-warning rounded-circle">
                                                                <i className="ti-package"></i>
                                                            </span>
                                                    </figure>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                        New Order Recieved
                                                        <i title="Mark as unread" data-toggle="tooltip"
                                                           className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                    </p>
                                                    <span className="text-muted small">45 sec ago</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"
                                               className="list-group-item d-flex align-items-center hide-show-toggler">
                                                <div>
                                                    <figure className="avatar avatar-sm m-r-15">
                                                            <span className="avatar-title bg-danger-bright text-danger rounded-circle">
                                                                <i className="ti-server"></i>
                                                            </span>
                                                    </figure>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                        Server Limit Reached!
                                                        <i title="Mark as unread" data-toggle="tooltip"
                                                           className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                    </p>
                                                    <span className="text-muted small">55 sec ago</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="#"
                                               className="list-group-item d-flex align-items-center hide-show-toggler">
                                                <div>
                                                    <figure className="avatar avatar-sm m-r-15">
                                                            <span className="avatar-title bg-info-bright text-info rounded-circle">
                                                                <i className="ti-layers"></i>
                                                            </span>
                                                    </figure>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <p className="mb-0 line-height-20 d-flex justify-content-between">
                                                        Apps are ready for update
                                                        <i title="Mark as unread" data-toggle="tooltip"
                                                           className="hide-show-toggler-item fa fa-check font-size-11"></i>
                                                    </p>
                                                    <span className="text-muted small">Yesterday</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-2 text-right">
                                    <ul className="list-inline small">
                                        <li className="list-inline-item">
                                            <Link to="#">Mark All Read</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                     
            
                    
                        <li className="nav-item dropdown">
                            <Link to="#" className="nav-link" title="User menu" data-toggle="dropdown">
                            <i data-feather="settings">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z">
                                    </path></svg>
                            </i>

                            </Link>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                                <div className="p-4 text-center d-flex justify-content-between"
                                     data-backround-image="assets/media/image/image1.jpg">
                                    <h6 className="mb-0">Settings</h6>
                                </div>
                                <div>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch1"  />
                                                {/* checked */}
                                                <label className="custom-control-label" htmlFor="customSwitch1">Allow notifications.</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch2" />
                                                <label className="custom-control-label" htmlFor="customSwitch2">Hide user requests</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch3"  />
                                                {/* checked */}
                                                <label className="custom-control-label" htmlFor="customSwitch3">Speed up demands</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch4"  />
                                                {/* checked */}
                                                <label className="custom-control-label" htmlFor="customSwitch4">Hide menus</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch5" />
                                                <label className="custom-control-label" htmlFor="customSwitch5">Remember next visits</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" className="custom-control-input" id="customSwitch6" />
                                                <label className="custom-control-label" htmlFor="customSwitch6">Enable report generation.</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>                    
                    </ul>
            
                
                    <ul className="navbar-nav d-flex align-items-center">
                        <li className="nav-item header-toggler">
                            <Link to="#" className="nav-link">
                                <i data-feather="arrow-down" />
                            </Link>
                        </li>
                    </ul>
               
                </div>
            
            </div>
     
      
            <div id="main">
            
        
                <div className="navigation">
            
                    <div className="navigation-menu-tab">
                        <div>
                            <div className="navigation-menu-tab-header" data-toggle="tooltip" title="Roxana Roussell" data-placement="right">
                                <Link to="#" className="nav-link" data-toggle="dropdown" aria-expanded="false">
                                    <figure className="avatar avatar-sm">
                                        <img src={women_avatar1} className="rounded-circle" alt="avatar" />
                                    </figure>
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right dropdown-menu-big">
                                    <div className="p-3 text-center" data-backround-image="assets/media/image/image1.jpg">
                                        <figure className="avatar mb-3">
                                            <img src={women_avatar1} className="rounded-circle" alt="image" />
                                        </figure>
                                        <h6 className="d-flex align-items-center justify-content-center">
                                            Roxana Roussell
                                            <Link to="#" className="btn btn-primary btn-sm ml-2" data-toggle="tooltip" title="Edit profile">
                                                <i data-feather="edit-2"></i>
                                            </Link>
                                        </h6>
                                        <small>Balance: <strong>$105</strong></small>
                                    </div>
                                    <div className="dropdown-menu-body">
                                        <div className="border-bottom p-4">
                                            <h6 className="text-uppercase font-size-11 d-flex justify-content-between">
                                                Storage
                                                <span>%25</span>
                                            </h6>
                                            <div className="progress" style={{height: "8px"}}>
                                                <div className="progress-bar bg-primary" role="progressbar" style={{width:"35%"}}
                                                     aria-valuenow="35"
                                                     aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                        <div className="list-group list-group-flush">
                                            <Link to="#" className="list-group-item">Profile</Link>
                                            <Link to="#" className="list-group-item d-flex">
                                                Followers <span className="text-muted ml-auto">214</span>
                                            </Link>
                                            <Link to="#" className="list-group-item d-flex">
                                                Inbox <span className="text-muted ml-auto">18</span>
                                            </Link>
                                            <Link to="#" className="list-group-item" data-sidebar-target="#settings">Billing</Link>
                                            <Link to="#" className="list-group-item" data-sidebar-target="#settings">Need help?</Link>
                                            <Link to="#" className="list-group-item text-danger" data-sidebar-target="#settings">Sign Out!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-grow-1">
                            <ul>
                                <li>
                                    <Link to="#" data-toggle="tooltip" data-placement="right" title="Dashboards"
                                       data-nav-target="#dashboards">
                                        <i data-feather="bar-chart-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14">
                                            </line></svg>
                                            </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" data-toggle="tooltip" data-placement="right" title="Apps" data-nav-target="#apps">
                                        <i data-feather="command">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z">
                                            </path></svg>
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <a className="active" href="#" data-toggle="tooltip" data-placement="right" title="UI Elements"
                                       data-nav-target="#elements">
                                        <i data-feather="layers">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
                                        </i>
                                    </a>
                                </li>
                                <li>
                                    <Link to="#" data-toggle="tooltip" data-placement="right" title="Pages" data-nav-target="#pages">
                                        <i data-feather="copy">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1">
                                            </path></svg>
                                        </i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link to="#" data-toggle="tooltip" data-placement="right" title="Settings">
                                        <i data-feather="settings">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                                        </i>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="login.html" data-toggle="tooltip" data-placement="right" title="Logout">
                                        <i data-feather="log-out">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                                        </i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
            
                 
                    <div className="navigation-menu-body">           
                       
                        <div>
                            <div id="navigation-logo">
                                <Link to="index.html">
                                    <img className="logo" src={LogoPNG}alt="logo" />
                                    <img className="logo-light" src="assets/media/image/logo-light.png" alt="light logo" />
                                </Link>
                            </div>
                        </div>
                   
            
                        <div className="navigation-menu-group">
            
                            <div id="dashboards">
                                <ul>
                                    <li className="navigation-divider">Dashboards</li>
                                    <li><Link to="index.html">CRM System</Link></li>
                                    <li><Link to="dashboard-two.html">Ecommerce <span className="badge badge-danger">2</span></Link></li>
                                    <li><Link to="dashboard-three.html">Analytics</Link></li>
                                    <li><Link to="dashboard-four.html">Project Management</Link></li>
                                    <li><Link to="dashboard-five.html">Helpdesk Management</Link></li>
                                    <li className="navigation-divider">Contacts</li>
                                    <li>
                                        <div className="list-group list-group-flush">
                                            <Link to="#" className="list-group-item d-flex align-items-center">
                                                <div>
                                                    <div className="avatar avatar-sm m-r-10">
                                                        <img src="assets/media/image/user/man_avatar1.jpg" className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <span>Valentine Maton</span>
                                            </Link>
                                            <Link to="#" className="list-group-item d-flex align-items-center">
                                                <div>
                                                    <div className="avatar avatar-sm m-r-10">
                                                        <img src="assets/media/image/user/women_avatar2.jpg" className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <span>Holmes Cherryman</span>
                                            </Link>
                                            <Link to="#" className="list-group-item d-flex align-items-center">
                                                <div>
                                                    <div className="avatar avatar-sm m-r-10">
                                                        <img src="assets/media/image/user/women_avatar4.jpg" className="rounded-circle" alt="image" />
                                                    </div>
                                                </div>
                                                <span>Kenneth Hune</span>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="navigation-divider">Followers</li>
                                    <li>
                                        <div className="avatar-group ml-4">
                                            <Link to="#" className="avatar">
                                                <span className="avatar-title bg-success rounded-circle">E</span>
                                            </Link>
                                            <Link to="#" className="avatar">
                                                <img src="assets/media/image/user/women_avatar5.jpg" className="rounded-circle" alt="avatar" />
                                            </Link>
                                            <Link to="#" className="avatar">
                                                <img src="assets/media/image/user/women_avatar2.jpg" className="rounded-circle" alt="avatar" />
                                            </Link>
                                            <Link to="#" className="avatar">
                                                <span className="avatar-title bg-info rounded-circle">C</span>
                                            </Link>
                                            <Link to="#" className="avatar">
                                                <span className="avatar-title bg-dark rounded-circle">+30</span>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div id="apps">
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
                            <div className="open" id="elements">
                                <ul>
                                    <li className="navigation-divider">UI Elements</li>
                                    <li className="open">
                                        <Link to="#">Basic</Link>
                                        <ul>
                                            <li><Link to="alerts.html">Alert</Link></li>
                                            <li><Link to="accordion.html">Accordion</Link></li>
                                            <li><Link to="buttons.html">Buttons</Link></li>
                                            <li><Link to="dropdown.html">Dropdown</Link></li>
                                            <li><Link to="list-group.html">List Group</Link></li>
                                            <li><Link to="pagination.html">Pagination</Link></li>
                                            <li><Link to="typography.html">Typography</Link></li>
                                            <li><Link to="media-object.html">Media Object</Link></li>
                                            <li><Link to="progress.html">Progress</Link></li>
                                            <li><Link to="modal.html">Modal</Link></li>
                                            <li><Link to="spinners.html">Spinners</Link></li>
                                            <li><a className="active" href="navs.html">Navs</a></li>
                                            <li><Link to="tab.html">Tab</Link></li>
                                            <li><Link to="tooltip.html">Tooltip</Link></li>
                                            <li><Link to="popovers.html">Popovers</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#">Cards</Link>
                                        <ul>
                                            <li><Link to="basic-cards.html">Basic Cards </Link></li>
                                            <li><Link to="image-cards.html">Image Cards </Link></li>
                                            <li><Link to="card-scroll.html">Card Scroll </Link></li>
                                            <li><Link to="other-cards.html">Others </Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="avatar.html">Avatar</Link></li>
                                    <li><Link to="icons.html">Icons</Link></li>
                                    <li><Link to="colors.html">Colors</Link></li>
                                    <li>
                                        <Link to="#">Plugins</Link>
                                        <ul>
                                            <li><Link to="sweet-alert.html">Sweet Alert</Link></li>
                                            <li><Link to="lightbox.html">Lightbox</Link></li>
                                            <li><Link to="toast.html">Toast</Link></li>
                                            <li><Link to="tour.html">Tour</Link></li>
                                            <li><Link to="slick-slide.html">Slick Slide</Link></li>
                                            <li><Link to="nestable.html">Nestable</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#">Forms</Link>
                                        <ul>
                                            <li><Link to="basic-form.html">Form Layouts</Link></li>
                                            <li><Link to="custom-form.html">Custom Forms</Link></li>
                                            <li><Link to="advanced-form.html">Advanced Form</Link></li>
                                            <li><Link to="form-validation.html">Validation</Link></li>
                                            <li><Link to="form-wizard.html">Wizard</Link></li>
                                            <li><Link to="file-upload.html">File Upload</Link></li>
                                            <li><Link to="datepicker.html">Datepicker</Link></li>
                                            <li><Link to="timepicker.html">Timepicker</Link></li>
                                            <li><Link to="colorpicker.html">Colorpicker</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#">Tables</Link>
                                        <ul>
                                            <li><Link to="tables.html">Basic Tables</Link></li>
                                            <li><Link to="data-table.html">Datatable</Link></li>
                                            <li><Link to="responsive-table.html">Responsive Tables</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#">Charts</Link>
                                        <ul>
                                            <li><Link to="apexchart.html">Apex</Link></li>
                                            <li><Link to="chartjs.html">Chartjs</Link></li>
                                            <li><Link to="justgage.html">Justgage</Link></li>
                                            <li><Link to="morsis.html">Morsis</Link></li>
                                            <li><Link to="peity.html">Peity</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#">Maps</Link>
                                        <ul>
                                            <li><Link to="google-map.html">Google</Link></li>
                                            <li><Link to="vector-map.html">Vector</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                            <div id="pages">
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
                        </div>
                    </div>             
            
                </div>
          
            
            
                <main className="main-content">
            
                    <div className="page-header">
                        <div className="container-fluid d-sm-flex justify-content-between">
                            <h4>Navs</h4>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="#">Dashboard</Link>
                                    </li>
                                    <li className="breadcrumb-item">
                                        <Link to="#">Components</Link>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">Navs</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
  
            
                    <div className="container-fluid">
            
                        <div className="row">
                            <div className="col-md-12">            
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Base nav</h6>
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Active</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link disabled" href="#" tabIndex="-1"
                                                   aria-disabled="true">Disabled</a>
                                            </li>
                                        </ul>
            
                                        {/* <div data-label="CODE EXAMPLE" className="demo-code-preview">
                                    <pre><code className="language-html">&lt;ul className="nav"&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link active" href="#"&gt;Active&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                {/* &lt;a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/Link&gt; *}
              &lt;/li&gt;
            &lt;/ul&gt;</code></pre>
                                        </div> */}
                                    </div>
                                </div>
            
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Horizontal alignment</h6>
                                        <ul className="nav justify-content-center">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Active</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link disabled" href="#" tabIndex="-1"
                                                   aria-disabled="true">Disabled</a>
                                            </li>
                                        </ul>
                                        <ul className="nav justify-content-end">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Active</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                           <li className="nav-item">
                                                <a className="nav-link disabled" href="#" tabIndex="-1"
                                                   aria-disabled="true">Disabled</a>
                                            </li> 
                                        </ul> 
            
                                        {/* <div data-label="CODE EXAMPLE" className="demo-code-preview">
                                    <pre><code className="language-html">&lt;ul className="nav justify-content-center"&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link active" href="#"&gt;Active&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                {/* &lt;a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/Link&gt; */}
              {/* &lt;/li&gt;
            &lt;/ul&gt;
            
            &lt;ul className="nav justify-content-end"&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link active" href="#"&gt;Active&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt; */}
                {/* &lt;a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/Link&gt; }
              &lt;/li&gt;
            &lt;/ul&gt;</code></pre>
                                        </div> */}
                                    </div>
                                </div>
            
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Vertical</h6>
                                        <ul className="nav flex-column">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Active</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link disabled" href="#" tabindex="-1"
                                                   aria-disabled="true">Disabled</a>
                                            </li> */}
                                        </ul>
            
                                        {/* <div data-label="CODE EXAMPLE" className="demo-code-preview">
                                            <pre><code className="language-html">&lt;ul className="nav flex-column"&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link active" href="#"&gt;Active&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                {/* &lt;a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/Link&gt; }
              &lt;/li&gt;
            &lt;/ul&gt;</code></pre>
                                        </div> */}
                                    </div>
                                </div>
            
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Tabs</h6>
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Active</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link disabled" href="#" tabindex="-1"
                                                   aria-disabled="true">Disabled</a>
                                            </li> */}
                                        </ul>
            
                                        {/* /* <div data-label="CODE EXAMPLE" className="demo-code-preview">
                                            <pre><code className="language-html">&lt;ul className="nav nav-tabs"&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link active" href="#"&gt;Active&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                { &lt;a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/Link&gt; }
              &lt;/li&gt;
            &lt;/ul&gt;</code></pre>
                                        </div>*/ }
                                    </div>
                                </div>
            
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Pills</h6>
                                        <ul className="nav nav-pills">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Active</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link disabled" href="#" tabindex="-1"
                                                   aria-disabled="true">Disabled</a>
                                            </li> */}
                                        </ul>
            
                                        {/* <div data-label="CODE EXAMPLE" className="demo-code-preview">
                                            <pre><code className="language-html">&lt;ul className="nav nav-pills"&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link active" href="#"&gt;Active&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                {/* &lt;a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/Link&gt; }
              &lt;/li&gt;
            &lt;/ul&gt;</code></pre>
                                        </div> */}
                                    </div>
                                </div>
            
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Fill and justify</h6>
                                        <ul className="nav nav-pills nav-fill">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Active</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Longer nav link</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link disabled" href="#" tabindex="-1"
                                                   aria-disabled="true">Disabled</a>
                                            </li> */}
                                        </ul>
{/*             
                                        <div data-label="CODE EXAMPLE" className="demo-code-preview">
                                            <pre><code className="language-html">&lt;ul className="nav nav-pills nav-fill"&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link active" href="#"&gt;Active&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Longer nav link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                {/* &lt;a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/Link&gt; }
              &lt;/li&gt;
            &lt;/ul&gt;</code></pre>
                                        </div> */}
                                    </div>
                                </div>
            
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Tabs with dropdowns</h6>
                                        <ul className="nav nav-tabs">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Active</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                                   aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Separated link</a>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link disabled" href="#" tabindex="-1"
                                                   aria-disabled="true">Disabled</a>
                                            </li> */}
                                        </ul>
{/*             
                                        <div data-label="CODE EXAMPLE" className="demo-code-preview">
                                            <pre><code className="language-html">&lt;ul className="nav nav-tabs"&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link active" href="#"&gt;Active&lt;/a&gt;
              &lt;/li&gt;
              &lt;li className="nav-item dropdown"&gt;
                &lt;a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                   aria-haspopup="true" aria-expanded="false"&gt;Dropdown&lt;/a&gt;
                &lt;div className="dropdown-menu"&gt;
                  &lt;a className="dropdown-item" href="#"&gt;Action&lt;/a&gt;
                  &lt;a className="dropdown-item" href="#"&gt;Another action&lt;/a&gt;
                  &lt;a className="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;
                  &lt;div className="dropdown-divider"&gt;&lt;/div&gt;
                  &lt;a className="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;
                &lt;/div&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/a&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                {/* &lt;a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/a&gt; }
              &lt;/li&gt;
            &lt;/ul&gt;</code></pre>
                                        </div> */}
                                    </div>
                                </div>
            
                                <div className="card">
                                    <div className="card-body">
                                        <h6 className="card-title">Pills with dropdowns</h6>
                                        <ul className="nav nav-pills">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#">Active</a>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                                                   aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                                <div className="dropdown-menu">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                    <div className="dropdown-divider"></div>
                                                    <a className="dropdown-item" href="#">Separated link</a>
                                                </div>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Link</a>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link disabled" href="#" tabindex="-1"
                                                   aria-disabled="true">Disabled</a>
                                            </li> */}
                                        </ul>
{/*             
                                        <div data-label="CODE EXAMPLE" className="demo-code-preview">
                                            <pre><code className="language-html">&lt;ul className="nav nav-pills"&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link active" href="#"&gt;Active&lt;/a&gt;
              &lt;/li&gt;
              &lt;li className="nav-item dropdown"&gt;
                &lt;a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                   aria-haspopup="true" aria-expanded="false"&gt;Dropdown&lt;/a&gt;
                &lt;div className="dropdown-menu"&gt;
                  &lt;a className="dropdown-item" href="#"&gt;Action&lt;/a&gt;
                  &lt;a className="dropdown-item" href="#"&gt;Another action&lt;/a&gt;
                  &lt;a className="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;
                  &lt;div className="dropdown-divider"&gt;&lt;/div&gt;
                  &lt;a className="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;
                &lt;/div&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                &lt;a className="nav-link" href="#"&gt;Link&lt;/a&gt;
              &lt;/li&gt;
              &lt;li className="nav-item"&gt;
                {/* &lt;a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/a&gt; }
              &lt;/li&gt;
            &lt;/ul&gt;</code></pre>
                                        </div> */}
                                    </div>
                                </div>
            
                            </div>
                        </div>
            
                    </div>
            
                 
                    <footer>
                        <div className="container-fluid">
                            <div>© 2019 Protable v1.0.0 Made by <Link to="http://laborasyon.com/">Laborasyon</Link></div>
                            <div>
                                <nav className="nav">
                                    <Link to="https://themeforest.net/licenses/standard" className="nav-link">Licenses</Link>
                                    <Link to="#" className="nav-link">Change Log</Link>
                                    <Link to="#" className="nav-link">Get Help</Link>
                                </nav>
                            </div>
                        </div>
                    </footer>
           
            
                </main>
             
            
            </div>
            </div>
       
           
        )
    }
}

export default dashboard
