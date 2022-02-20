import styled from "styled-components"
import { useSelector } from "react-redux";
import { selectApprovedImages } from "../features/ImageReducer"

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

export const Carousel = () => {
    const approvedImgArray = useSelector(selectApprovedImages)
    const acceptedImages = JSON.parse(localStorage.getItem("acceptedImages"))

    return(
        <div>
            {
                approvedImgArray.length <= 0 && acceptedImages === null
                ?
                <PlusIconStyle>
                    <svg width="30" height="29" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 8H1M9 16V8V16ZM9 8V0V8ZM9 8H17H9Z" stroke="#BABDC1" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </PlusIconStyle>
                :
                approvedImgArray.length <= 0 && acceptedImages.length > 0
                ?
                <CarouselStyle>
                    {
                        acceptedImages.map(img => <ApprovedImagesStyle key={img.id} src={img.urls.small} />)
                    }
                </CarouselStyle>
                :
                approvedImgArray.length > 0 && acceptedImages.length > 0
                ?
                <CarouselStyle>
                    {
                        acceptedImages.map(img => <ApprovedImagesStyle key={img.id} src={img.urls.small} />)
                    }
                </CarouselStyle>
                :
                <CarouselStyle>
                    {
                        approvedImgArray.map(img => <ApprovedImagesStyle key={img.id} src={img.urls.small} />)
                    }
                </CarouselStyle>
            }
        </div>
    )
}