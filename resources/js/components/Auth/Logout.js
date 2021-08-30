import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Logout = ({ setIsLoggedIn }) => {
    const history = useHistory();

    const handleLogout = async () => {
        await axios.post('/logout');
        setIsLoggedIn(false);
        history.push('/');
    }

    return (
        <a href="#" className="nav-link d-flex" onClick={handleLogout}>
            {/* <FontAwesomeIcon className="align-self-center error" icon={faSignOutAlt} /> */}
            <span className="mx-2">Logout</span>
        </a>
    )
}

export default Logout
