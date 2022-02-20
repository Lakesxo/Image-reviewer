import React from 'react'
import { Carousel, CarouselStyle } from './styled-components/Carousel'
import { Container } from "./styled-components/Container"
import { ImagePreview, ImagePreviewStyle } from './styled-components/ImagePreview'
import { MainSection } from './styled-components/MainSection'
import { Paragraph, ParagraphContainer } from './styled-components/Paragraph'
import { useSelector } from "react-redux";
import { selectApprovedImages } from "./features/ImageReducer"

const App = () => {
  const approvedImgArray = useSelector(selectApprovedImages)
  const acceptedImages = JSON.parse(localStorage.getItem("acceptedImages"))

  return (
    <div>
      <Container>
        <MainSection>
          <ParagraphContainer>
            <Paragraph text={"IMAGE APPROVAL APPLICATION"} />
          </ParagraphContainer>
          <ParagraphContainer>
            <Paragraph text={`APPROVED IMAGES (${acceptedImages === null ? approvedImgArray.length : acceptedImages.length})`} />
            <CarouselStyle>
              <Carousel />
            </CarouselStyle>
          </ParagraphContainer>
          <ImagePreviewStyle>
            <ImagePreview />
          </ImagePreviewStyle>
        </MainSection>
      </Container>
    </div>
  )
}

export default App