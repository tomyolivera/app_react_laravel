import React from 'react'

import useSection from '../../../CustomHooks/useSection';

import ChangePasswordConfig from '../Profile/Password/ChangePasswordConfig';

const Security = () => {
    return (
        <>
            <h1>Security</h1> <hr className="my-3" />

            { useSection({ title: "Password", Component: ChangePasswordConfig }) }
            { useSection({ title: "Password", Component: ChangePasswordConfig }) }            
            { useSection({ title: "Password", Component: ChangePasswordConfig }) }
            { useSection({ title: "Password", Component: ChangePasswordConfig }) }            
            { useSection({ title: "Password", Component: ChangePasswordConfig }) }
            { useSection({ title: "Password", Component: ChangePasswordConfig }) }            
            { useSection({ title: "Password", Component: ChangePasswordConfig }) }
            { useSection({ title: "Password", Component: ChangePasswordConfig }) }            

        </>
    )
}

export default Security
