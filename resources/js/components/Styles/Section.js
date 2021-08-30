import styled from 'styled-components';

export const StyledSection = styled.div`
    background-color: ${props => props.theme === "dark" ? "#232525" : "#fff"};
`;