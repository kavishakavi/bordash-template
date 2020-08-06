import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
function alert() {
    return (
      
        <Fragment>
                    <div class="page-header">
                        <div class="container-fluid d-sm-flex justify-content-between">
                            <h4>Alerts</h4>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <a href="#">Dashboard</a>
                                    </li>
                                    <li class="breadcrumb-item">
                                        <a href="#">Components</a>
                                    </li>
                                    <li class="breadcrumb-item active" aria-current="page">Alerts</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div class="container-fluid">

                        <div class="card">
                            <div class="card-body">
                                <h6 class="card-title">Default Functionality</h6>

                                <div class="alert alert-secondary" role="alert">
                                    A simple secondary alert—check it out!
                    </div>
                                <div class="alert alert-success" role="alert">
                                    A simple success alert—check it out!
                    </div>
                                <div class="alert alert-danger" role="alert">
                                    A simple danger alert—check it out!
                    </div>
                                <div class="alert alert-warning" role="alert">
                                    A simple warning alert—check it out!
                    </div>
                                <div class="alert alert-info" role="alert">
                                    A simple info alert—check it out!
                    </div>
                                <div class="alert alert-dark m-b-0" role="alert">
                                    A simple dark alert—check it out!
                    </div>
                            </div>
                        </div>
                    </div>
                    </Fragment>
    )
}

export default alert
