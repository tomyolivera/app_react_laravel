import React from 'react'
import { Button } from 'reactstrap'
import { FormatStatus, FormatDate } from '../../../helper'

const ProfileData = ({ user, setEditing, setMessage, messageJsx }) => {
    const handleEditButton = () => {
        setEditing(true);
        setMessage({});
    }

    return (
        <>
            <div className="row py-2">
                <span className="col-3">Name</span>
                <span className="col-9">{ user.name }</span>
            </div>

            <hr className="m-0" />

            <div className="row py-2">
                <span className="col-3">Email</span>
                <span className="col-9">{ user.email }</span>
            </div>

            <hr className="m-0" />

            <div className="row py-2">
                <span className="col-3">Status</span>
                <span className="col-9">{ FormatStatus(user.status) }</span>
            </div>

            <hr className="m-0" />

            <div className="row py-2">
                <span className="col-3">Created At</span>
                <span className="col-9">{ FormatDate({ date: user.created_at }) }</span>
            </div>

            {/* <hr className="m-0" /> */}

            <div className="mt-3">
                <Button color="dark" onClick={handleEditButton}>Edit</Button>
                { messageJsx }
            </div>
        </>
    )
}

export default ProfileData
