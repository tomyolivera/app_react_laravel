import React, { useContext } from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import UserContext from '../../../context/user';
import Logout from '../../Auth/Logout';
import ThemeContext from '../../../context/theme';

const Header = ({ Link, isLoggedIn, setIsLoggedIn }) => {
    const { theme } = useContext(ThemeContext);
    const { user } = useContext(UserContext);

    return (
        <nav className={`navbar navbar-expand-md shadow-sm navbar-${theme}`}>
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
                                            <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown">
                                                { user.name }
                                            </a>

                                            <div className={`dropdown-menu dropdown-menu-right ${theme === "light" ? "bg-light text-dark" : "bg-dark text-light"}`} aria-labelledby="navbarDropdown">
                                                <Link to="/settings/profile" className="nav-link">
                                                    {/* <FontAwesomeIcon color="green" icon={faUser} /> */}
                                                    <span className="mx-2">Settings</span>
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