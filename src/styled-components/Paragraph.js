import styled from "styled-components";

export const ParagraphStyle = styled.p`
    color: #3758CD;
    font-weight: 500;
    margin-top: 0px
` 
export const ParagraphContainer = styled.div`
    padding: 1em 0;
    border-bottom: 1px solid #DADADA
`

export const Paragraph = ({ text }) => {
    return (
        <ParagraphStyle>{text}</ParagraphStyle>
    )
}