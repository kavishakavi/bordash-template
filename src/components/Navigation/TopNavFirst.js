import React from 'react'
import { Link } from 'react-router-dom'
function TopNavFirst() {
    return (
        <div id="main">
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
</main>
        </div>
    )
}

export default TopNavFirst
