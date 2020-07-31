import React, { Component } from 'react'
import LogoPNG from '../assets/media/image/logo.png'
import { Link } from 'react-router-dom'
export class register extends Component {
    render() {
        return (
            <div className="form-membership">
{/* 
            <div class="preloader">
                <div class="preloader-icon"></div>
            </div>          */}
            
            <div class="form-wrapper">           
          
                <div id="logo">
                    <img class="logo" src={LogoPNG} alt="image" />
                    <img class="logo-dark" src="assets/media/image/logo-dark.html" alt="image" />
                </div>           
            
                <h5>Create account</h5>            
           
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Firstname" required autofocus />
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Lastname" required />
                    </div>
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="Email" required />
                    </div>
                    <div class="form-group">
                        <input type="password" class="form-control" placeholder="Password" required />
                    </div>
                    <button class="btn btn-primary btn-block">Register</button>
                    <hr />
                    <p class="text-muted">Already have an account?</p>
                    <Link to="login.html" class="btn btn-outline-light btn-sm">Sign in!</Link>
                </form>             
            
            </div>
            
            
           </div>
          
            
        )
    }
}

export default register
