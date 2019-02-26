import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Nav extends Component {
    renderContent() {
        
        
        switch (this.props.auth) {
            case null:
                return "Loading ....";
            case false:
                return <li><a href="/auth/google" >Login with google </a ></li>;
            default:
                return <div>
                    <li><a href="/auth/logout" >Logout  </a ></li></div>;
        }
    }

    render() {
        return (
            <nav className='yellow darken-3'>
                <div className="nav-wrapper">
                    <Link to={this.props.auth ? '/home' : '/'} className="brand-logo black-text">Doit</Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}
function mapStateToProps(state) {
    return { auth: state.auth }
} 
export default connect(mapStateToProps)(Nav);