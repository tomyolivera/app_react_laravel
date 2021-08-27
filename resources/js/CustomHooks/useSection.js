import React from 'react';

const useSection = ({ title, Component, user, getUser }) => (
    <>
        <div className="row mb-3">
            <div className="col-sm-12 col-lg-6">
                <h2>{ title }</h2>
            </div>
            <div className="col-sm-12 col-lg-6 bg-white shadow-md p-3 rounded-lg">
                <Component user={user} getUser={getUser} />
            </div>
        </div>
    </>
);

export default useSection;