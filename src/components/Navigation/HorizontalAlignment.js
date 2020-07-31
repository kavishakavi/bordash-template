import React from 'react'

function HorizontalAlignment() {
    return (
        <div id="main">
        <main className="main-content">
    <div className="container-fluid">
    <div className="card">
                            <div className="card-body">
      
            <h6 className="card-title">Horizontal alignment</h6>
            <ul className="nav justify-content-center">
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
            <ul className="nav justify-content-end">
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
        <pre><code className="language-html">&lt;ul className="nav justify-content-center"&gt;
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
 &lt;a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/Link&gt; 
&lt;/li&gt;
&lt;/ul&gt;

&lt;ul className="nav justify-content-end"&gt;
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
 &lt;a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true"&gt;Disabled&lt;/Link&gt; 
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

export default HorizontalAlignment
