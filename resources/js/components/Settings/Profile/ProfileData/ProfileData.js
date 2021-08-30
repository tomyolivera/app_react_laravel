import React from 'react'
import { Button } from 'reactstrap'
import { FormatStatus, FormatDate } from '../../../../helper'

const ProfileData = ({ user, setEditing, setMessage, messageJsx }) => {
    const handleEditButton = () => {
        setEditing(true);
        setMessage({});
    }

    return (
        <>
            <div className="row py-2">
                <b className="col-sm-12 col-lg-3">Name</b>
                <span className="col-sm-12 col-lg-9">{ user.name }</span>
            </div>

            <div className="row py-2">
                <b className="col-sm-12 col-lg-3">Email</b>
                <span className="col-sm-12 col-lg-9">{ user.email }</span>
            </div>

            <div className="row py-2">
                <b className="col-sm-12 col-lg-3">Status</b>
                <span className="col-sm-12 col-lg-9">{ FormatStatus(user.status) }</span>
            </div>

            <div className="row py-2">
                <b className="col-sm-12 col-lg-3">Created At</b>
                <span className="col-sm-12 col-lg-9">{ FormatDate({ date: user.created_at }) }</span>
            </div>

            <div className="mt-3">
                <Button color="dark" onClick={handleEditButton}>Edit</Button>
                { messageJsx }
            </div>
        </>
    )
}

export default ProfileData
