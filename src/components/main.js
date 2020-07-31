import React from 'react'
import { Link } from 'react-router-dom'
import LogoPNG from '../assets/media/image/logo.png'
import women_avatar1 from '../assets/media/image/user/women_avatar1.jpg'

function main() {
    return (
    
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
        </div>
    
    
      
    )
}

export default main
