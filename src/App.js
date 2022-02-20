import React from 'react'
import { Actions } from './styled-components/Actions'
import { Carousel, CarouselStyle } from './styled-components/Carousel'
import { Container } from "./styled-components/Container"
import { ImagePreview, ImagePreviewStyle } from './styled-components/ImagePreview'
import { MainSection } from './styled-components/MainSection'
import { Paragraph, ParagraphContainer } from './styled-components/Paragraph'

const App = () => {
  return (
    <div>
      <Container>
        <MainSection>
          <ParagraphContainer>
            <Paragraph text={"IMAGE APPROVAL APPLICATION"} />
          </ParagraphContainer>
          <ParagraphContainer>
            <Paragraph text={`APPROVED IMAGES (${0})`} />
            <CarouselStyle>
              {/* Approved images from array */}
              <Carousel src={"https://res.cloudinary.com/dt9pwfpi5/image/upload/v1643357357/modnest_vyd5ef.png"} />
            </CarouselStyle>
          </ParagraphContainer>
          <ParagraphContainer>
            <ImagePreviewStyle>
              <ImagePreview src={"https://res.cloudinary.com/dt9pwfpi5/image/upload/v1643357357/modnest_vyd5ef.png"} />
            </ImagePreviewStyle>
          </ParagraphContainer>
          <Actions />
        </MainSection>
      </Container>
    </div>
  )
}

export default App