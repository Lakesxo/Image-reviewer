import styled from "styled-components"

export const Container = styled.section`
    background-color: #3758CD;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    @media (max-width: 768px) {
        align-items: flex-start;
        padding-top: 50px
    }
`;