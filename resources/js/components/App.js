import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Home from './Home';
import Header from './Layouts/Header/Index';
import Tasks from './Tasks';
import LoginForm from './Auth/Login/LoginForm';
import RegisterForm from './Auth/Register/RegisterForm';

function App() {
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const userIsLogged = async () => {
        try {
            const res = await axios.get('/user/isLoggedIn');
            setIsLoggedIn(res.data);
        } catch (e) {
            console.error(e);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        userIsLogged();
    }, [])

    return (
        <Router>
            <Header Link={Link}
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                    loading={loading}
            />

            <Switch>
                <div className="container mt-3">
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    {
                        loading || isLoggedIn
                        ?   <>
                                <Route path="/tasks" exact>
                                    <Tasks />
                                </Route>
                            </>
                        :   <>
                                <Route path="/login" exact>
                                    <LoginForm setIsLoggedIn={setIsLoggedIn} />
                                </Route>
                                <Route path="/register" exact>
                                    <RegisterForm setIsLoggedIn={setIsLoggedIn} />
                                </Route>
                            </>
                    }
                </div>
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
