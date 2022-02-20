import styled from "styled-components"


export const CarouselStyle = styled.div`
    display: flex;
    overflow-x: scroll;
    margin-top: 10px;
    ::-webkit-scrollbar {
        width: 10px;
        height: 3px;
    }
    ::-webkit-scrollbar-track {
        background: transparent;
    }
    ::-webkit-scrollbar-thumb {
        background: #DADADA;
        border-radius: 5px
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`
export const ApprovedImagesStyle = styled.img`
    height: 90px;
    margin-right: 10px;
`
const PlusIconStyle = styled.div`
    background: #DADADA;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 90px;
    border-radius: 3px
`

export const Carousel = ({ src }) => {
    return(
        <div>
            {
                true 
                ?
                <PlusIconStyle>
                    <svg width="30" height="29" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8H1M9 16V8V16ZM9 8V0V8ZM9 8H17H9Z" stroke="#BABDC1" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </PlusIconStyle>
                :
                <>
                    <ApprovedImagesStyle src={src} />
                </>
            }
        </div>
    )
}