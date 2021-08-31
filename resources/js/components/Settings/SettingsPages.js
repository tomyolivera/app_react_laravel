import Profile from "./Profile/Profile";
import Security from "./Security/Security";

export function SettingPages () {
    return [
        {
            "name": "Profile",
            "Component": Profile
        },
        {
            "name": "Security",
            "Component": Security
        }
    ]
}

export default SettingPages;