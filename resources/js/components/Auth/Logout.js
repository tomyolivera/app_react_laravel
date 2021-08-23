import React from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button } from 'reactstrap';

const Logout = ({ setIsLoggedIn }) => {
    let history = useHistory();

    const handleLogout = async () => {
        await axios.post('/logout');
        setIsLoggedIn(false);
        history.push('/');
    }

    return (
        <Button color=""
                className="nav-link"
                onClick={handleLogout}
            >
        Logout
        </Button>
    )
}

export default Logout
