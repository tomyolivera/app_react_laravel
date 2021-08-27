import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Logout from '../../Auth/Logout';

const Header = ({ Link, isLoggedIn, setIsLoggedIn, user }) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light shadow-sm">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Laravel
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                    </ul>

                    <ul className="navbar-nav ml-auto">
                        {
                            isLoggedIn
                                ?
                                    <>
                                        <li className="nav-item dropdown">
                                            <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                                { user.name }
                                            </a>

                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                                <Link to="/profile" className="nav-link">
                                                    <FontAwesomeIcon color="green" icon={faUser} />
                                                    <span className="mx-2">My Profile</span>
                                                </Link>

                                                <hr className="m-0" />

                                                <Logout setIsLoggedIn={setIsLoggedIn} />
                                            </div>
                                        </li>

                                        <Link to="/tasks" className="nav-link">Tasks</Link>
                                    </>
                                : <>
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">Login</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/register" className="nav-link">Register</Link>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header