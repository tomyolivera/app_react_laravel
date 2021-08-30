import React from 'react'
import { Spinner } from 'reactstrap'
import $ from 'jquery';

const LoadingPage = ({ loading }) => {
    
    !loading && $("#loading").fadeOut(300);

    return (
        <div id="loading">
            <div className="bg-dark text-light d-flex justify-content-center align-items-center vh-100 w-100" style={{position: 'absolute', zIndex: 100}}>
                <div className="d-flex">
                    <div className="mr-4">
                        <h1>Loading</h1>
                    </div>
                    <div className="align-self-center">
                        <Spinner size="md" color="light" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingPage
