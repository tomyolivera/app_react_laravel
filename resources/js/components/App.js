import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Home from './Home';
import Header from './Layouts/Header/Header';
import Tasks from './Tasks/Tasks';
import LoginForm from './Auth/Login/LoginForm';
import RegisterForm from './Auth/Register/RegisterForm';
import LoadingPage from './Loading/LoadingPage';
import UserProvider from '../context/user/Provider';
import Settings from './Settings/Settings';
import ThemeProvider from '../context/theme/Provider';
import ChangeThemeButton from './Global/Button/ChangeThemeButton';

function App() {
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkIfSessionExists = async () => {
        await axios.get('/user/isLoggedIn').then(({data}) => setIsLoggedIn(data));
    }

    useEffect(() => {
        (async function (){
            await checkIfSessionExists().then(() => setLoading(false));
        })();
    }, [])

    return (
        <ThemeProvider>
            <UserProvider>
                <LoadingPage loading={loading} />
                <Router>
                    <Header Link={Link}
                            isLoggedIn={isLoggedIn}
                            setIsLoggedIn={setIsLoggedIn}
                            loading={loading}
                    />

                    <div className="container mt-3">
                        <Switch>
                                <Route path="/" exact component={Home} />
                                {
                                    loading || isLoggedIn
                                    ?   <>
                                            <Route path="/tasks" exact component={Tasks} />
                                            <Route path="/settings" exact component={Settings} />
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
                        </Switch>
                    </div>
                </Router>
                <ChangeThemeButton />
            </UserProvider>
        </ThemeProvider>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
