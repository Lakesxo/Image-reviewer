import styled from "styled-components";

export const ImagePreviewStyle = styled.div`
    height: 200px;
    width: 100%;
`
const PlusIconStyle = styled.div`
    background: #DADADA;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    border-radius: 3px;
    cursor: pointer
`
const Image = styled.img`
    height: 200px;
    display: block;
    margin: 0px auto
`


export const ImagePreview = ({ src }) => {
    return (
        <div>
            {
                true
                ?
                <PlusIconStyle>
                    <svg width="40" height="39" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8H1M9 16V8V16ZM9 8V0V8ZM9 8H17H9Z" stroke="#BABDC1" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </PlusIconStyle>
                :
                <>
                    <Image src={src} />
                </>
            }
        </div>
    )
}