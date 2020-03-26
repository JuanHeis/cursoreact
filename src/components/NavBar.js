import React from 'react'
import logo from '../img/logo.svg'
import "../styles/NavBar.css"
class NavBar extends React.Component {
    render() {
        return (
            <div className='Navbar'>
                <a className='Navbar__brand' classhref='/'>
                    <div className='container-fluid'>
                        <img className='Navbar__brand-logo' src={logo} />
                        <span className='font-weight-light'>Platzi</span>
                        <span className='font-weight-bold'>Conf</span>
                    </div>
                </a>
            </div>
        )
    }
}

export default NavBar