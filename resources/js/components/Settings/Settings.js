import React, { useContext } from 'react'
import ThemeContext from '../../context/theme'

import Profile from './Profile/Profile'
import Security from './Security/Security'

const ListTab = ({ name }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <a  id={`list-${name}-list`}
            className={`list-group-item list-group-item-action ${theme === "dark" ? "bg-dark text-light" : "bg-light"}`}
            data-toggle="list"
            href={`#list-${name}`}
        >
        { name }
        </a>
    )
}

const TabPane = ({ name, Component }) => (
    <div className="tab-pane fade show" id={`list-${name}`}>
        <Component />
    </div>
)

const Settings = () => {
    return (
        <div className="row">
            <div className="col-sm-12 col-lg-2">
                <div className="list-group" id="list-tab">
                    { ListTab({name: "Account"}) }
                    { ListTab({name: "Profile"}) }
                    { ListTab({name: "Appearence"}) }
                    { ListTab({name: "Security"}) }
                    { ListTab({name: "Notifications"}) }
                    { ListTab({name: "Plans"}) }
                </div>
            </div>
            <div className="col-sm-12 col-lg-10">
                <div className="tab-content">
                    { TabPane({name: "Account", Component: Security}) }
                    { TabPane({name: "Profile", Component: Profile}) }
                    { TabPane({name: "Appearence", Component: Security}) }
                    { TabPane({name: "Security", Component: Security}) }
                    { TabPane({name: "Notifications", Component: Profile}) }
                    { TabPane({name: "Applications", Component: Security}) }
                    { TabPane({name: "Plans", Component: Profile}) }
                </div>
            </div>
        </div>
    )
}

export default Settings
