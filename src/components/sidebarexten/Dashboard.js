import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
function Dashboard() {
    return (

        <div className="open" id="dashboards">
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



    )
}

export default Dashboard
