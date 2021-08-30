import React from 'react'

import useSection from '../../../CustomHooks/useSection';

import ProfileConfig from './ProfileData/ProfileConfig';
import ChangePasswordConfig from './Password/ChangePasswordConfig';
import DisableUserConfig from './DisableUser/DisableUserConfig';
import DeleteUserConfig from './DeleteUser/DeleteUserConfig';

const Profile = () => {
    return (
        <>
            <h1>Profile</h1> <hr className="my-3" />

            { useSection({ title: "Data", Component: ProfileConfig }) }
            
            { useSection({ title: "Data", Component: ProfileConfig }) }

            { useSection({ title: "Password", Component: ChangePasswordConfig }) }

            <div className="d-flex justify-content-center my-5">
                <h2 className="text-danger">Danger Zone</h2>
            </div>

            { useSection({ title: "Disable User", Component: DisableUserConfig }) }

            { useSection({ title: "Delete User", Component: DeleteUserConfig }) }

        </>
    )
}

export default Profile
