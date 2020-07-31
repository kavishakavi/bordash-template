import React from 'react'

function PillsWithDropdown() {
    return (
        <div id="main">
        <main className="main-content">
    <div className="container-fluid">
    <div className="card">
                            <div className="card-body">
                    <h6 className="card-title">Pills with dropdowns</h6>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
                               aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Separated link</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1"
                               aria-disabled="true">Disabled</a>
                        </li> */}
                    </ul>

                    <div data-label="CODE EXAMPLE" className="demo-code-preview">
                        <pre><code className="language-html">&lt;ul className="nav nav-pills"&gt;
&lt;li className="nav-item"&gt;
&lt;a className="nav-link active" href="#"&gt;Active&lt;/a&gt;
&lt;/li&gt;
&lt;li className="nav-item dropdown"&gt;
&lt;a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button"
aria-haspopup="true" aria-expanded="false"&gt;Dropdown&lt;/a&gt;
&lt;div className="dropdown-menu"&gt;
&lt;a className="dropdown-item" href="#"&gt;Action&lt;/a&gt;
&lt;a className="dropdown-item" href="#"&gt;Another action&lt;/a&gt;
&lt;a className="dropdown-item" href="#"&gt;Something else here&lt;/a&gt;
&lt;div className="dropdown-divider"&gt;&lt;/div&gt;
&lt;a className="dropdown-item" href="#"&gt;Separated link&lt;/a&gt;
&lt;/div&gt;
&lt;/li&gt;
&lt;li className="nav-item"&gt;
&lt;a className="nav-link" href="#"&gt;Link&lt;/a&gt;
&lt;/li&gt;
&lt;li className="nav-item"&gt;
&lt;a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"&gt;Disabled&lt;/a&gt; 
&lt;/li&gt;
&lt;/ul&gt;</code></pre>
</div>
            </div>
          </div>
        </div>
     
        </main>
        </div>
    )
}

export default PillsWithDropdown
