import { FavoriteOutlined, ShoppingCart, ZoomInOutlined } from '@mui/icons-material'
import React from 'react'
import styled, { css } from 'styled-components'



const CardHeader = styled.div`
    position: relative;
    flex : 2;
    background-color : #F6F7FB;
    width: 100%;
    padding: 30px;
    display:flex;
    align-items: center;
    justify-content: center;
`
const CardImage = styled.img`
    width: 75% ;
    object-fit: cover;
    display: block;
    margin: 20px;
`
const Controls = styled.div`
    position : absolute;
    display : flex;
    align-items: center;
    justify-content: center;
    gap:8px;
    top : 0 ; 
    left : 0 ; 
    translate : 20px 20px;
    max-width: 0;
    overflow: hidden;
    transition: all 1s ease-in;

`
const IconContainer = styled.div`
    aspect-ratio: 1/1;
    width: 30px;
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
const CardButton = styled.button`
    border:none;
    outline: none;
    color : white;
    background-color: #08D15F;
    position: absolute;
    bottom: 0;
    left: 50%;
    translate: -50% -10px;
    cursor: pointer;
    font-size: 12px;
    display : block ;
    max-width : 0;
    overflow: hidden;
    transition:  max-width 1s linear , padding 1.2s linear;
    
`




const CardBody = styled.div`
    flex : 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;
    width: 100%;
    transition: all .5s linear ;
`
const CardTitle = styled.h1`
    color: #FB2E86;
    font-size: 18px;
    font-weight: bold;
    transition: all .3s ease-in-out;
    font-family: Lato;
`
const Colors = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
    `
const Color = styled.div`
    width : 20px;
    height: 5px;
    border-radius: 10px;
    transition: all .7s ease-in-out;

    ${({color})=>{
        if(color=== "sky"){
        return css`
            background-color: #05E6B7;
        `
        }else if (color === 'pink'){

        return css`
            background-color: #FB2E86;
        `
        }else if (color === 'blue'){
        return css`
            background-color: #00009D;
        `
        }
    }}

`
const Code = styled.span`
    font-size: 14px;
    font-family: Lato;
    transition: all .3s ease-in-out;
    color : #151875;
    `
const Price = styled.span`
    transition: all .3s ease-in-out;
    font-size: 14px;
    color : #151875;
`
const Card = styled.div`
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    max-height: 500px;
    &:hover ${CardBody}  {
         background-color: #2F1AC4;
    }
    &:hover ${Controls}  {
         max-width: 100vw;
    }
    &:hover ${CardButton}  {
        max-width: 100vw;
     padding: 10px 20px;

    }
    &:hover ${CardTitle} , &:hover ${Code} , &:hover ${Price} {
         color: white;
    }
    &:hover ${Color}  {
       ${({color})=> {
        if (color === "blue")
        {
            return css`
                background-color: white !important;
            `
        }
       }}
    } 
    
`

const FeatureProduct = () => {
  return (
    <Card>
        <CardHeader>
            <CardImage src='images/chair1.png' alt='Chair'></CardImage>
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
            <CardButton type="submit">View Details</CardButton>
        </CardHeader>
        <CardBody>
            <CardTitle>
            Cantilever chair
            </CardTitle>
            <Colors>
                <Color color="sky"></Color>
                <Color color="pink"></Color>
                <Color color="blue"></Color>
            </Colors>
            <Code>Code - Y523201</Code>
            <Price>$42.00</Price>
        </CardBody>
    </Card>
  )
}

export default FeatureProduct
