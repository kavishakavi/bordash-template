import React from 'react'

function BaseNav() {
    return (
        <div id="main">
        <main className="main-content">
    <div className="container-fluid">
    <div className="card">
                            <div className="card-body">
       
                    <h6 className="card-title">Base nav</h6>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Active</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabIndex="-1"
                               aria-disabled="true">Disabled</a>
                        </li>
                    </ul>

                    <div data-label="CODE EXAMPLE" className="demo-code-preview">
                <pre><code className="language-html">&lt;ul className="nav"&gt;
&lt;li className="nav-item"&gt;
&lt;a className="nav-link active" href="#"&gt;Active&lt;/Link&gt;
&lt;/li&gt;
&lt;li className="nav-item"&gt;
&lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
&lt;/li&gt;
&lt;li className="nav-item"&gt;
&lt;a className="nav-link" href="#"&gt;Link&lt;/Link&gt;
&lt;/li&gt;
&lt;li className="nav-item"&gt;
&lt;a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true"&gt;Disabled&lt;/Link&gt;
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

export default BaseNav
