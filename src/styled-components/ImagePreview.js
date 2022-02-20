import styled from "styled-components";
import { fetchPhoto } from "../api/apiEndpoints";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addApprovedImage, addRejectedImageId, selectRejectedImageIds } from "../features/ImageReducer"


export const ImagePreviewStyle = styled.div`
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
    max-width: 100%;
    display: block;
    margin: 0px auto
`
const ImageContainer = styled.div`
    padding: 1em 0;
    border-bottom: 1px solid #DADADA
`
const ActionText = styled.p`
    color: #BABDC1;
    text-align: center;
    margin-top: 25px
`
const FlexButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px
`
const RejectButton = styled.button`
    width: 45%;
    padding: 10px 0px;
    cursor: pointer;
    border-radius: 20px;
    background-color: #3B3D45;
    border: 2px solid #3B3D45;
`
const AcceptButton = styled.button`
    width: 45%;
    padding: 10px 0px;
    cursor: pointer;
    border-radius: 20px;
    background-color: #3758CD;
    border: 2px solid #3758CD;
`
const Loader = styled.div`
    border: 5px solid #f3f3f3;
    border-radius: 50%;
    border-top: 5px solid blue;
    border-bottom: 5px solid blue;
    width: 50px;
    height: 50px;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }
      
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    display: block;
    margin: 0px auto
`


export const ImagePreview = () => {
    const [newImage, setNewImage] = useState(null)
    const dispatch = useDispatch()
    const rejectedImageIDs = useSelector(selectRejectedImageIds)
    const [showActionBtns, setShowActionBtns] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    const getAndSetImage = async () => {
        setIsLoading(true)
        setNewImage("");
        const newImg = await fetchPhoto();
        if (newImg) {
            if (rejectedImageIDs.includes(newImg.id)) {
                getAndSetImage()
            } else {
                setNewImage(newImg);
                setShowActionBtns(true)
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    };

    const approveImage = () => {
        dispatch(addApprovedImage(newImage));
        getAndSetImage()
    };

    const rejectImage = () => {
        dispatch(addRejectedImageId(newImage.id));
        getAndSetImage()
    };


    return (
        <>
            <ImageContainer>
                {
                    newImage === null
                    ?
                    <PlusIconStyle onClick={getAndSetImage}>
                        <svg width="40" height="39" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 8H1M9 16V8V16ZM9 8V0V8ZM9 8H17H9Z" stroke="#BABDC1" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </PlusIconStyle>
                    :
                    newImage === "" && isLoading
                    ?
                    <Loader></Loader>
                    :
                    <>
                        <Image src={newImage.urls.small} />
                    </>
                }
            </ImageContainer>
            <>
                {
                    !showActionBtns
                    ?
                    <ActionText>Click on the + in order to get image recommedations.</ActionText>
                    :
                    <FlexButtons>
                        <RejectButton onClick={rejectImage}>
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.580002 0.579986C0.79094 0.369311 1.07688 0.250976 1.375 0.250976C1.67313 0.250976 1.95906 0.369311 2.17 0.579986L7 5.40999L11.83 0.579986C11.933 0.469456 12.0572 0.380803 12.1952 0.319315C12.3332 0.257827 12.4822 0.224764 12.6332 0.222099C12.7843 0.219434 12.9343 0.247221 13.0744 0.303802C13.2145 0.360384 13.3417 0.444601 13.4486 0.551429C13.5554 0.658257 13.6396 0.785508 13.6962 0.92559C13.7528 1.06567 13.7806 1.21572 13.7779 1.36677C13.7752 1.51782 13.7422 1.66679 13.6807 1.80479C13.6192 1.94279 13.5305 2.06699 13.42 2.16999L8.59 6.99999L13.42 11.83C13.5305 11.933 13.6192 12.0572 13.6807 12.1952C13.7422 12.3332 13.7752 12.4821 13.7779 12.6332C13.7806 12.7843 13.7528 12.9343 13.6962 13.0744C13.6396 13.2145 13.5554 13.3417 13.4486 13.4485C13.3417 13.5554 13.2145 13.6396 13.0744 13.6962C12.9343 13.7528 12.7843 13.7805 12.6332 13.7779C12.4822 13.7752 12.3332 13.7421 12.1952 13.6807C12.0572 13.6192 11.933 13.5305 11.83 13.42L7 8.58999L2.17 13.42C1.95674 13.6187 1.67467 13.7269 1.38322 13.7218C1.09177 13.7166 0.813689 13.5985 0.607569 13.3924C0.40145 13.1863 0.283382 12.9082 0.278239 12.6168C0.273097 12.3253 0.381282 12.0432 0.580002 11.83L5.41 6.99999L0.580002 2.16999C0.369326 1.95905 0.250992 1.67311 0.250992 1.37499C0.250992 1.07686 0.369326 0.790924 0.580002 0.579986V0.579986Z" fill="#fff"/>
                            </svg>
                        </RejectButton>
                        <AcceptButton onClick={approveImage}>
                            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 7L7 13L17 1" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </AcceptButton>
                    </FlexButtons>
                }
            </>
        </>
    )
}