import React, { useContext } from 'react'
import { Button } from 'reactstrap';
import UserContext from '../../../../context/user';

const DisableUserData = ({ setEditing, setMessage }) => {
    const { user } = useContext(UserContext);
    const handleEditButton = () => {
        setEditing(true);
        setMessage({});
    }

    return (
        <>
            <Button color={user.disabled ? "success" : "danger"}
                    onClick={handleEditButton}>
                {user.disabled ? "Enable" : "Disable"}
            </Button>
        </>
    )
}

export default DisableUserData
