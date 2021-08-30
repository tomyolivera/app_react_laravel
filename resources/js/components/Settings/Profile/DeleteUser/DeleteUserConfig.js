import React, { useContext, useState } from 'react'

import DeleteUserData from './DeleteUserData';
import DeleteUserForm from './DeleteUserForm';

import { useFlashMessage } from '../../../../CustomHooks';
import UserContext from '../../../../context/user';

const DeleteUserConfig = () => {
    const { user, getUser } = useContext(UserContext);
    const [editing, setEditing] = useState(false);
    const { messageJsx, setMessage } = useFlashMessage();

    return (
        <>
            <h5>This action can not be reverted.</h5>
            {
                editing
                ? <DeleteUserForm user={user}
                                setEditing={setEditing}
                                callback={getUser}
                                setMessage={setMessage}
                            />

                : <DeleteUserData setEditing={setEditing}
                                  setMessage={setMessage}
                                />
            }

            { messageJsx }
        </>
    )
}

export default DeleteUserConfig
