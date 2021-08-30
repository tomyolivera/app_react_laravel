import React, { useContext, useState } from 'react'

import ProfileData from './ProfileData';
import ProfileForm from './ProfileForm'

import { useFlashMessage } from '../../../../CustomHooks/useFlashMessage';
import UserContext from '../../../../context/user';

const ProfileConfig = () => {
    const { user, getUser } = useContext(UserContext);
    const [editing, setEditing] = useState(false);
    const { messageJsx, setMessage } = useFlashMessage();

    return (
        <>
            {
                editing
                ? <ProfileForm user={user}
                                setEditing={setEditing}
                                callback={getUser}
                                setMessage={setMessage}
                            />

                : <ProfileData user={user}
                                setEditing={setEditing}
                                setMessage={setMessage}
                                messageJsx={messageJsx}
                            />
            }
        </>
    )
}

export default ProfileConfig
