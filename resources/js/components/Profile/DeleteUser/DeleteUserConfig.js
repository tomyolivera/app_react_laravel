import React, { useState } from 'react'

import DeleteUserData from './DeleteUserData';
import DeleteUserForm from './DeleteUserForm';

import { useFlashMessage } from '../../../CustomHooks/useFlashMessage';

const DeleteUserConfig = ({ user, getUser }) => {
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
