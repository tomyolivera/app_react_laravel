import React from 'react'

import useSection from '../../CustomHooks/useSection';

import DeleteUserConfig from './DeleteUser/DeleteUserConfig';
import ChangePasswordConfig from './Password/ChangePasswordConfig';
import ProfileConfig from './ProfileData/ProfileConfig';

const Profile = ({ user, getUser }) => {
    return (
        <>
            <h1>Profile</h1> <hr className="my-3" />

            { useSection({title: "Data", Component: ProfileConfig, user, getUser}) }
            { useSection({title: "Data", Component: ProfileConfig, user, getUser}) }

            { useSection({title: "Password", Component: ChangePasswordConfig, user, getUser}) }
            { useSection({title: "Password", Component: ChangePasswordConfig, user, getUser}) }

            <div className="d-flex justify-content-center my-5">
                <h2 className="text-danger">Danger Zone</h2>
            </div>

            { useSection({title: "Disable User", Component: DeleteUserConfig, user, getUser}) }

            { useSection({title: "Delete User", Component: DeleteUserConfig, user, getUser}) }

        </>
    )
}

export default Profile
