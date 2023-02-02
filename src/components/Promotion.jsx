import React from 'react'
import styled, { css } from 'styled-components'


const Container = styled.div`
    background-color: #F2F0FF;
    position: relative;
    z-index: -2;
    `
const LambImage = styled.img`
    position: absolute;
    top : 0 ; 
    max-width: 100px;
    left :0;
    @media screen and (max-width: 980px){
        left : 100%;
        translate: -100%;
    }
`


const Wrapper = styled.div`
    display: flex;
    min-height: 50vh;
    max-width: 1140px;
    margin: 0 auto;
    padding: 20px;
    gap:10px;
    @media screen and (max-width: 480px){
    flex-direction: column-reverse;
    gap : 20px;
  }
`
const Left = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    gap: 20px;
`
const HeaderSmallTitle = styled.p`
    color: #FB2E86;
    font-weight: bold;
    font-family: Lato;
`
const Title = styled.h1`
    font-size: 53px;
    font-weight: 600;
    font-family: 'Josefin Sans', sans-serif;
    color: black;
    @media screen and (max-width: 500px){
   font-size : 30px;
  }
`
const Desc = styled.p`
    color: #8A8FB9;

`
const HeaderButton = styled.button.attrs( {type:'submit'})`
    cursor: pointer !important;
    color: white;
    background-color: #FB2E86;
    padding: 15px 25px;
    font-family: 'Josefin Sans', sans-serif;
    border: none;
    outline: none;
    transition:all .5s linear;
    &:hover{
        scale: 1.3;
    }
`
const Right = styled.div`
    flex: 1;
    position : relative;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Circle = styled.div`
    position: absolute;
    border-radius: 100%;
   
   
     ${({dir})=>{
        if(dir=== "up")
        {
            return css`
                z-index: -1;
                background-color: rgba(236, 210, 250 , .35);
                width: 80%;
                 height: 80%;
                 top:0;
                    left:0;
                    bottom: 0;
                right: 0;
                margin: auto;
            `            
        }else {
            return css`
                z-index: -2;
                background-color: rgba(236, 210, 250 , .35);
                width: 100%;
                 height: 100%;
                 
            `

        }
    }}
`

const FeaturedImage = styled.img`
    display: block; 
    width : 100%;
    z-index: 0;
`
export const Promotion = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
               <HeaderSmallTitle>Best Furniture For Your Castle....</HeaderSmallTitle>
                <Title>New Furniture Collection Trends in 2020</Title>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</Desc>
                <HeaderButton>Shop Now</HeaderButton>
            </Left>
            <Right>
                <FeaturedImage src='images/sofa.png'></FeaturedImage>
                <Circle dir="up">
                </Circle>
                <Circle dir="down">
                </Circle>
            </Right>
        </Wrapper>
    <LambImage src='images/lamb.png' alt='Lamb Image' />
    
    </Container>
  )
}
