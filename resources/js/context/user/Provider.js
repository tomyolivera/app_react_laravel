import React, { useEffect, useState } from 'react'
import UserContext from './index';

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({})
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const getUser = async () => {
        await axios.get('/api/user').then(({data}) => setUser(data));
    }

    // async function checkIfSessionExists() {
    //     await axios.get('/user/isLoggedIn').then(({data}) => setIsLoggedIn(data));
    // }
    
    useEffect(() => {
        (async function(){
            // if(await checkIfSessionExists())
                await getUser();
        })();
    }, []);

    return (
        <UserContext.Provider value={{
            user, setUser, getUser,
            // isLoggedIn, setIsLoggedIn, checkIfSessionExists
        }}>
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider