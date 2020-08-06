import React, { Component } from 'react'
import LogoPNG from '../assets/media/image/logo.png'
import { Link } from 'react-router-dom'
import SocialButtons from '../components/SocialButtons'


export class login extends Component {

    render() {
        return (
            <div className="form-membership">
                {/* <div className="preloader">
                    <div className="preloader-icon"></div>
                </div> */}

                <div className="form-wrapper">
                    <div id="logo">
                        <img className="logo" src={LogoPNG} alt="image" />
                        {/* <img className="logo-dark" src="assets/media/image/logo-dark.html" alt="image" /> */}
                    </div>
                    <h5>Sign in</h5>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username or email" required autofocus />
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required />
                        </div>
                        <div className="form-group d-flex justify-content-between">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" checked="" id="customCheck1" />
                                <label className="custom-control-label" for="customCheck1">Remember me</label>
                            </div>
                            <Link to="/forgot-password">Reset password</Link>
                        </div>
                        <button className="btn btn-primary btn-block">Sign in</button>
                        <hr />
                        <p className="text-muted">Login with your social media account.</p>
                        <SocialButtons />
                        <hr />
                        <p className="text-muted">Don't have an account?</p>
                        <Link to="/register" className="btn btn-outline-light btn-sm">Register now!</Link>
                    </form>
                </div>
            </div>
            
        )
    }
}

export default login
