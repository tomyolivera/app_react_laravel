import React from 'react'
import { Button } from 'reactstrap';

const DeleteUserData = ({ setEditing, setMessage }) => {
    const handleEditButton = () => {
        setEditing(true);
        setMessage({});
    }

    return (
        <>
            <Button color="danger" onClick={handleEditButton}>Delete</Button>
        </>
    )
}

export default DeleteUserData
