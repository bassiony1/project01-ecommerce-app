import React from 'react'
import styled , { css } from 'styled-components'

const Container = styled.div`
    background-color: #F1F0FF;
    position: relative;
    z-index: -2;
    margin-top: 50px;
    margin-bottom: 50px;
    `
const Wrapper = styled.div`
display: flex;
min-height: 50vh;
max-width: 1140px;
margin: 0 auto;
padding: 20px;
gap:20px;
@media screen and (max-width: 480px){
flex-direction: column;
gap : 20px;
}
`
const Right = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: flex-start;
    gap: 47px;
`
const Left = styled.div`
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
const Title = styled.h1`
    font-size: 35px;
    font-weight: 600;

    font-family: 'Josefin Sans', sans-serif;
    color: #151875;
    @media screen and (max-width: 500px){
   font-size : 30px;
  }
`
const HeaderButton = styled.button.attrs( {type:'submit'})`
    color: white;
    font-size: 15px;
    background-color: #FB2E86;
    padding: 15px 35px;
    font-family: 'Josefin Sans', sans-serif;
    border: none;
    outline: none;
    cursor: pointer !important;
    z-index: 5;
    &:hover{
        scale: 1.3;
    }
`
const Qualites = styled.ul`
    display: flex;
    flex-direction : column;
    align-items : flex-start;
    justify-content: center;
    gap : 30px;
    padding: 10px;
    list-style: none;
    color : rgba(21, 24, 117,.35);

   
`
const Quality = styled.li`
     &::before {
    content: "•";  
    font-size: 20px;
    font-weight: bold;
    display: inline-block;
    width: 1em; 
    margin-left: -1em;
    ${({color})=>{
    if(color === "pink"){
        return css`
            color: #FB2E86;
        `
    }else if (color=== "blue"){
        return css`
            color: #2B2BF5;
        `
    }else if (color === "sky" ){
        return css`
            color: #2BF5CC;
        `
    }
    }}
    }
`
const UniqueFeatures = () => {
  return (
    <Container>
        <Wrapper>
            
            <Left>
                <FeaturedImage src='images/Home-Stylish-Club-Sofa.png'></FeaturedImage>
                <Circle dir="up">
                </Circle>
                <Circle dir="down">
                </Circle>
            </Left>
            <Right>

                <Title>New Furniture Collection Trends in 2020</Title>
                <Qualites>
                    <Quality color= "pink">All frames constructed with hardwood solids and laminates</Quality>
                    <Quality color= "blue">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</Quality>
                    <Quality color= "sky">Arms, backs and seats are structurally reinforced</Quality>
                </Qualites>
                <HeaderButton>Add To Cart</HeaderButton>
            </Right>
        </Wrapper>
    
    </Container>
  )
}

export default UniqueFeatures
