import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        
            
            <footer>
                <div className="container-fluid">
                    <div>© 2019 Protable v1.0.0 Made by <Link to="http://laborasyon.com/">Laborasyon</Link></div>
                    <div>
                        <nav className="nav">
                            <Link to="https://themeforest.net/licenses/standard" className="nav-link">Licenses</Link>
                            <Link to="#" className="nav-link">Change Log</Link>
                            <Link to="#" className="nav-link">Get Help</Link>
                        </nav>
                    </div>
                </div>
            </footer>  
    
        
        
       
    )
}

export default Footer
