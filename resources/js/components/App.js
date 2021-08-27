import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Home from './Home';
import Header from './Layouts/Header/Header';
import Tasks from './Tasks/Tasks';
import LoginForm from './Auth/Login/LoginForm';
import RegisterForm from './Auth/Register/RegisterForm';
import Profile from './Profile/Profile';
import LoadingPage from './Loading/LoadingPage';

function App() {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkIfSessionExists = async () => {
        const res = await axios.get('/user/isLoggedIn');
        setIsLoggedIn(res.data);
        return res.data;
    }

    const getUser = async () => {
        try {
            await axios.get('/api/user/').then(res => {
                setUser(res.data);
            });
        } catch (e) {
            console.error(e);
        }
    }

    useEffect(() => {
        if(checkIfSessionExists()){
            getUser();
        }
    }, [])

    return (
        <>
            {/* <LoadingPage loading={loading} /> */}
            <Router>
                <Header Link={Link}
                        isLoggedIn={isLoggedIn}
                        setIsLoggedIn={setIsLoggedIn}
                        loading={loading}
                        user={user}
                />

                <Switch>
                    <div className="container mt-3">
                        <Route path="/" exact component={Home} />
                        {
                            loading || isLoggedIn
                            ?   <>
                                    <Route path="/tasks" exact component={Tasks} />
                                    <Route path="/profile" exact>
                                        <Profile user={user} getUser={getUser} />
                                    </Route>
                                </>
                            :   <>
                                    <Route path="/login" exact>
                                        <LoginForm setIsLoggedIn={setIsLoggedIn} getUser={getUser} />
                                    </Route>
                                    <Route path="/register" exact>
                                        <RegisterForm setIsLoggedIn={setIsLoggedIn} getUser={getUser} />
                                    </Route>
                                </>
                        }
                    </div>
                </Switch>
            </Router>
        </>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
