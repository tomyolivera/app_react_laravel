import React from 'react';
import Logout from '../../Auth/Logout';
import Loading from '../../Loading';

const Header = ({ Link, isLoggedIn, setIsLoggedIn, loading }) => {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
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
                            loading
                            ? <Loading size="sm" />
                            : isLoggedIn
                                ?
                                    <>
                                        <li className="nav-item dropdown">
                                            <a id="navbarDropdown" className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                                Logged
                                            </a>

                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
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