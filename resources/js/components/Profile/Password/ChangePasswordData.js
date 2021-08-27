import React from 'react'
import { Button } from 'reactstrap'

const ChangePasswordData = ({ setEditing, setMessage, messageJsx }) => {
    const handleEditButton = () => {
        setEditing(true);
        setMessage({});
    }

    return (
        <>
            <Button color="dark" onClick={handleEditButton}>Edit</Button>
            { messageJsx }
        </>
    )
}

export default ChangePasswordData
