import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

import Profile from './Profile/Profile'
import Security from './Security/Security'

const Settings = () => {
    return (
        <BrowserRouter basename="/settings">
            <div className="row">
                <div className="col-sm-12 col-lg-2">
                    {/* List */}
                    <div className="d-flex flex-column bg-dark rounded">
                        <Link to="/profile" className="text-light text-decoration-none py-2 px-3">Profile</Link>
                        <Link to="/security" className="text-light text-decoration-none py-2 px-3">Security</Link>
                    </div>
                </div>

                <div className="col-sm-12 col-lg-10">
                    {/* Page */}
                    <Route path="/profile" exact component={Profile} />
                    <Route path="/security" exact component={Security} />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Settings
