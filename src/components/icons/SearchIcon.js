import React from 'react'
import { Link } from 'react-router-dom'

function SearchIcon() {
    return (
        <div>            
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
        </div>
    )
}

export default SearchIcon
