import React from 'react'
import { Button } from 'reactstrap'

const CancelButton = ({ callback }) => {
    return <Button  type="button"
                    color="secondary"
                    className="mx-3"
                    onClick={() => callback(false)}
                >
    Cancel
    </Button>
}

export default CancelButton
