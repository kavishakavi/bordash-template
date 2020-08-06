import React, { Fragment } from 'react'

function accordion() {
    return (
        <div id="body">
            <div id="main">
            <main class="main-content">

                {/* <!-- begin::page-header --> */}
                <div class="page-header">
                    <div class="container-fluid d-sm-flex justify-content-between">
                        <h4>Accordion</h4>
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <a href="#">Dashboard</a>
                                </li>
                                <li class="breadcrumb-item">
                                    <a href="#">Components</a>
                                </li>
                                <li class="breadcrumb-item active" aria-current="page">Accordion</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                {/* <!-- end::page-header --> */}

                <div class="container-fluid">

                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title">Basic Accordion</h6>

                            <div class="accordion" id="accordionExample">
                                <div class="card">
                                    <div class="card-header" id="headingOne">
                                        <button class="btn btn-link" type="button" data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="true" aria-controls="collapseOne">
                                            Collapsible Group Item #1
                                </button>
                                    </div>
                                    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne"
                                        data-parent="#accordionExample">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad
                                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                            on it
                                            squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                            helvetica,
                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                            excepteur
                                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                                            synth
                                            nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingTwo">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                                            data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Collapsible Group Item #2
                                </button>
                                    </div>
                                    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo"
                                        data-parent="#accordionExample">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad
                                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                            on it
                                            squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                            helvetica,
                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                            excepteur
                                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                                            synth
                                            nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-header" id="headingThree">
                                        <button class="btn btn-link collapsed" type="button" data-toggle="collapse"
                                            data-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree">
                                            Collapsible Group Item #3
                                </button>
                                    </div>
                                    <div id="collapseThree" class="collapse" aria-labelledby="headingThree"
                                        data-parent="#accordionExample">
                                        <div class="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                            richardson ad
                                            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
                                            on it
                                            squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                                            helvetica,
                                            craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan
                                            excepteur
                                            butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
                                            synth
                                            nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            </div>
                </div>  
           
    )
}

export default accordion
