import React from 'react'

const SubmitButton = ({ disabled, color="green", text="Save", submittingText="Saving" }) => {
    return (
        <button type="submit"
                className={`btn button-${color}`}
                disabled={disabled}
            >
        { disabled ? submittingText : text }
        </button>
    )
}

export default SubmitButton;