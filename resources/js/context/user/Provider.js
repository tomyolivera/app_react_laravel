import React, { useEffect, useState } from 'react'
import UserContext from './index';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    
    const getUser = async () => {
        const res = await axios.get('/api/user');
        setUser(res.data);
    }
    
    useEffect(() => {
        getUser();
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider