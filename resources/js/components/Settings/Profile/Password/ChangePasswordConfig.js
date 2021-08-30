import React, { useContext, useState } from 'react'
import UserContext from '../../../../context/user';

import { useFlashMessage } from '../../../../CustomHooks/useFlashMessage';
import ChangePasswordData from './ChangePasswordData';
import ChangePasswordForm from './ChangePasswordForm';

const ChangePasswordConfig = () => {
    const { user, getUser } = useContext(UserContext);
    const [editing, setEditing] = useState(false);
    const { messageJsx, setMessage } = useFlashMessage();

    return (
        <>
            <h4>Update your password</h4> <hr className="my-3" />
            {
                editing
                ? <ChangePasswordForm user={user}
                                      setEditing={setEditing}
                                      callback={getUser}
                                      setMessage={setMessage}
                                    />

                : <ChangePasswordData setEditing={setEditing}
                                      setMessage={setMessage}
                                      messageJsx={messageJsx}
                                    />
            }
        </>
    )
}

export default ChangePasswordConfig
