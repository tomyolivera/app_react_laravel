import React, { useContext, useState } from 'react'

import DisableUserData from './DisableUserData';
import DisableUserForm from './DisableUserForm';

import { useFlashMessage } from '../../../../CustomHooks';
import UserContext from '../../../../context/user';

const DisableUserConfig = () => {
    const { user, getUser } = useContext(UserContext);
    const [editing, setEditing] = useState(false);
    const { messageJsx, setMessage } = useFlashMessage();

    return (
        <>
            {
                editing
                ? <DisableUserForm user={user}
                                setEditing={setEditing}
                                callback={getUser}
                                setMessage={setMessage}
                            />

                : <DisableUserData setEditing={setEditing}
                                  setMessage={setMessage}
                                />
            }

            { messageJsx }
        </>
    )
}

export default DisableUserConfig
