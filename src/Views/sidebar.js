import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import women_avatar1 from '../assets/media/image/user/women_avatar1.jpg'
import Dashboard from '../components/sidebarexten/Dashboard'
import LogoPNG from '../assets/media/image/logo.png'

const DashbordIcon = () => <i data-feather="bar-chart-2">
    <Link to="/dashboard/Dashboard">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-bar-chart-2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14">
    </line></svg>
    </Link>
</i>

const AppsIcon = () => <i data-feather="command">
    <Link to="/dashboard/Apps">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-command"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z">
    </path></svg>
    </Link>
</i>

const UIElementsIcon = () => <i data-feather="layers">
    <Link to="/dashboard/UIelement">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
    </Link>
</i>

const PagesIcon = () => <i data-feather="copy">
    <Link to="/dashboard/Pages">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-copy"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1">
    </path></svg>
    </Link>
    </i>

const SettingsIcon = () => <i data-feather="settings">
    <Link to="/any-url">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
    </Link>
    </i>

const LogoutIcon = () => <i data-feather="log-out">
    <Link to="/login">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
    </Link>
    </i>

const SideBarIconRenderer = (props) => {
    const { activeIcon, hoverText, icon: Icon } = props
    return <li style={{ backgroundColor: activeIcon === hoverText && '#8db3d5' }} >
        <Link to="#" data-toggle="tooltip" data-placement="right" title={hoverText} ><Icon /></Link>
       
    </li>
}
function sidebar() {

    const sidebarIcons = [
        { hoverText: 'Dashboards', icon: DashbordIcon },
        { hoverText: 'Apps', icon: AppsIcon },
        { hoverText: 'UI Elements', icon: UIElementsIcon },
        { hoverText: 'Pages', icon: PagesIcon },
    ]
    const activeIcon = "UI Elements"
    return (
        
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
                                    <div className="progress" style={{ height: "8px" }}>
                                        <div className="progress-bar bg-primary" role="progressbar" style={{ width: "35%" }}
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

                        {/* // hoverText={e.hoverText} icon={e.icon} */}
                        {sidebarIcons.map(e => <SideBarIconRenderer activeIcon={activeIcon} {...e} />)}

                        {/* <SideBarIconRenderer activeIcon={activeIcon} hoverText={"Dashboards"} icon={DashbordIcon} />
            <SideBarIconRenderer activeIcon={activeIcon} hoverText={"Apps"}   icon={AppsIcon} />
            <SideBarIconRenderer activeIcon={activeIcon} hoverText={"UI Elements"} icon={UIElementsIcon} />
            <SideBarIconRenderer activeIcon={activeIcon} hoverText={"Pages"}   icon={PagesIcon} /> */}
                    </ul>
                </div>
                <div>
                    <ul>
                        <SideBarIconRenderer hoverText={"Settings"} icon={SettingsIcon} />
                        <SideBarIconRenderer hoverText={"Logout"} icon={LogoutIcon} />
                    </ul>
                </div>
            </div>
           

        
    )
}

export default sidebar
