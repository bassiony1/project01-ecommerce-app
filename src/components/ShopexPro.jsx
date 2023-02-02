import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    padding: 50px;
    max-width: 250px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);

`
const ImgContainer = styled.div`
`
const ProImage = styled.img`
width: 100%;

`

const Title = styled.h3`
    color: #151875;
`
const Desc = styled.p`
    text-align: center;
    color : rgba(21, 24, 117,.35);

`
const ShopexPro = ({src}) => {
  return (
    <Container>
        <ImgContainer>
    <ProImage src={src} alt="Delivery Image"></ProImage>
        </ImgContainer>
        <Title>24/7 Support</Title>
        <Desc>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi optio eos fugit alias dolorum incidunt.</Desc>
    </Container>
  )
}

export default ShopexPro
