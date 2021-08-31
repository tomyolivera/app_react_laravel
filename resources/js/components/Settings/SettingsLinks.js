import { upperFirst } from 'lodash'
import React from 'react'

const useLinka = ({Link, name}) => (
    <>
        <Link to={`/${name}`} className="text-light text-decoration-none py-2 px-3">
            {upperFirst(name)}
        </Link>
        <hr className="m-0 bg-light" />
    </>
)

export default useLinka
