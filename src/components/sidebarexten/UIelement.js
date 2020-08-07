import React from 'react'
import { Link } from 'react-router-dom'
function UIelement() {
    return (
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
    )
}

export default UIelement
