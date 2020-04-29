import styled from 'styled-components';

export default styled.div`
    background-color: ${(props) => props.theme.colors.appBackground};
    color: ${(props) => props.theme.colors.white};
    height: 100vh;
    width: 100vw;
    text-align: center;
    padding: 20px;
    padding-top: 10vh;

    & img {
        margin-bottom: 8vh;
    }

    & h1 {
        font-weight: bold;
    }

    & div {
        font-size: 40px;
    }
`;
