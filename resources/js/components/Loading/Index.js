import React from 'react'
import { Spinner } from 'reactstrap';

const Loading = ({ size, text, color="primary" }) => {
    return (
        <div className="d-flex">
            { text && <div className="align-self-center" style={{marginRight: 10}}>{ text }</div> }
            <div className="align-self-center">
                <Spinner color={color} size={size} />
            </div>
        </div>
    )
}

export default Loading
