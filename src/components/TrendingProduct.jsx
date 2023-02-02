import { FavoriteOutlined, ShoppingCart, ZoomInOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    padding: 10px;
    max-width: 350px;

`
const IconContainer = styled.div`
    aspect-ratio: 1/1;
    width: 35px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: #EEEFFB;
    transition: all .7s ease-in-out;
    color : rgba(19,137,255,1) ;

    &:hover {
        color: #2F1AC4;
    }
`
const Controls = styled.div`
    position : absolute;
    display : flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-height: 0;
    overflow: hidden;
    gap:8px;
    bottom : 0 ; 
    left : 0 ; 
    translate : 30px -30px;
    transition: all 1s linear;

`

const ImgContainer = styled.div`
    aspect-ratio: 1/1;
    position: relative;
    min-width: 300px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F7F7F7;
    transition: all 1s linear;
    &:hover {
        background-color: white;
    }
    &:hover ${Controls}{
        max-height: 100vh;
    }

`
const ProductImage = styled.img`
    width: 60%;
`
const ProductDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    gap: 20px;

`
const Name = styled.h3`
    color: #151875;
    flex: 2;
    font-size: 16px;
    margin-left: 10px;

`
const Price = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-right: 10px;

`
const NewPrice = styled.span`
    color: #151875;
    font-size: 14px;
`
const OldPrice = styled.del`
    color: #FB2448;
    font-size: 12px;
    margin-right: 5px;

`


const TrendingProduct = ({src}) => {
  return (
    <Container>
    <ImgContainer>
    <ProductImage src={src} alt="Chair Image"></ProductImage>
    <Controls>
                <IconContainer>
                    <ShoppingCart></ShoppingCart>
                </IconContainer>
                <IconContainer>
                    <FavoriteOutlined></FavoriteOutlined>
                </IconContainer>
                <IconContainer>
                    <ZoomInOutlined></ZoomInOutlined>
                </IconContainer>
            </Controls>
    </ImgContainer>
    <ProductDetails>
        <Name>Comfort Handy Craft</Name>
        
        <Price>
            <NewPrice>$42.00</NewPrice>
            <OldPrice>$65.00</OldPrice>
        </Price>

    </ProductDetails>
   
  </Container>
  )
}

export default TrendingProduct
