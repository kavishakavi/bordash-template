import React, { Component } from 'react'
import LogoPNG from '../assets/media/image/logo.png'
import { Link } from 'react-router-dom'

export class forgotPassword extends Component {
    render() {
        return (
            <div className="form-membership">
            {/* 
            <div class="preloader">
                <div class="preloader-icon"></div>
            </div> */}
         
            
            <div class="form-wrapper">
            
            
                <div id="logo">
                    <img class="logo" src={LogoPNG} alt="image" />
                    <img class="logo-dark" src="assets/media/image/logo-dark.html" alt="image" />
                </div>           
            
                <h5>Reset password</h5>
            
              
                <form>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Username or email" required autofocus />
                    </div>
                    <button class="btn btn-primary btn-block">Submit</button>
                    <hr />
                    <p class="text-muted">Take a different action.</p>
                    <Link to="/register" class="btn btn-sm btn-outline-light mr-1">Register now!</Link>
                    or
                    <Link to="/login" class="btn btn-sm btn-outline-light ml-1">Login!</Link>
                </form>          
            
            </div>
         
            </div>
            
        )
    }
}

export default forgotPassword
