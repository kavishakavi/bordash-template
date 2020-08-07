import React from 'react'
import { Link } from 'react-router-dom'
import LogoPNG from '../assets/media/image/logo.png'

function Sidebarexten() {
    return (
        <div id="main">
            <div className="navigation-menu-body">
            <div className="navigation">

                <div>
                    <div id="navigation-logo">
                        <Link to="index.html">
                            <img className="logo" src={LogoPNG} alt="logo" />
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
                                    <li><Link to="/dashboard/alert">Alert</Link></li>
                                    <li><Link to="/dashboard/accordion">Accordion</Link></li>
                                    <li><Link to="buttons.html">Buttons</Link></li>
                                    <li><Link to="dropdown.html">Dropdown</Link></li>
                                    <li><Link to="list-group.html">List Group</Link></li>
                                    <li><Link to="pagination.html">Pagination</Link></li>
                                    <li><Link to="typography.html">Typography</Link></li>
                                    <li><Link to="media-object.html">Media Object</Link></li>
                                    <li><Link to="progress.html">Progress</Link></li>
                                    <li><Link to="modal.html">Modal</Link></li>
                                    <li><Link to="spinners.html">Spinners</Link></li>
                                    <li><Link className="active" to="navs.html">Navs</Link></li>
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

export default Sidebarexten
