import React, { useContext } from 'react';
import ThemeContext from '../context/theme';
import { StyledSection as Section } from '../components/Styles/Section';

const useSection = ({ title, Component }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <div className="row mb-3">
                <div className="col-sm-12 col-lg-4">
                    <h3>{ title }</h3>
                </div>
                <Section theme={theme}
                        className={`col-sm-12 col-lg-8 shadow-md p-3 rounded-lg`}
                        style={{zIndex: 1}}
                        >
                    <Component />
                </Section>
            </div>
        </>
    )
}

export default useSection;