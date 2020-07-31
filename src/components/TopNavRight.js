import React from 'react'
import ChinaPNG from '../assets/media/image/flags/261-china.png'
import Tanzania from '../assets/media/image/flags/003-tanzania.png'
import unitedKingdom from '../assets/media/image/flags/262-united-kingdom.png'
import Tunisia from '../assets/media/image/flags/013-tunisia.png'
import Spain from '../assets/media/image/flags/044-spain.png'
import { Link } from 'react-router-dom'
import women_avatar1 from '../assets/media/image/user/women_avatar1.jpg'

function TopNavRight() {
    return (
        <div class="header">
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
            </div>
            </div>
       
    )
}

export default TopNavRight
