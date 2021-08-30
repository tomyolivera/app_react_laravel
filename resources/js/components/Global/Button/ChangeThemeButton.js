import React, { useContext } from 'react'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ThemeContext from '../../../context/theme'

const ChangeThemeButton = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    const handleClick = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return (
        <button style={{position: "fixed", right: 20, bottom: 20}}
                className="btn btn-primary"
                onClick={handleClick}
                >
            <FontAwesomeIcon icon={faSun} />
        </button>
    )
}

export default ChangeThemeButton
