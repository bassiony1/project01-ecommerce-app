import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import FeatureProduct from './FeatureProduct'


const Container = styled.div`
    position: relative;
    max-width: 1140px;
    margin : 20px auto;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    `
const Slider = styled.div`

display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: nowrap;
overflow: hidden;
margin: 20px;
width: 100%;


`
const Wrapper = styled.div`
  min-width : 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  transition: all .5s ease-in-out;
  translate: ${({slide})=> slide*-100}%;

  @media screen and (max-width: 1178px){
    flex-direction: column;
    gap: 20px;
  }
`
const FeatureHeader = styled.h1`
  font-size: 53px;
  margin-bottom: 40px;
  margin-top: 40px;
  color:  #1A0B5B;
  @media screen and (max-width: 500px){
   font-size : 30px;
  }

`
const SliderBullets = styled.div`
 display: flex;
    align-items: center;
    gap: 20px;
    justify-content: center;  
    
  `

const Bullet = styled.div`
  aspect-ratio: 1/1;
  width : 20px;
  border-radius: 100%;
  border: 1px solid #FB2E86;
  cursor: pointer;
  transition: all .3s ease-in-out;
  ${({slide , id})=>{
        if(slide=== id){
        return css`
            background-color: #FB2E86;
        `
        }
    }}
  `
  const IconContainer = styled.div`
  position: absolute;
  aspect-ratio: 1/1;
  width: 50px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #EEEFFB;
  color : #1A0B5B ;
  top: 50%;
  transition: all .8s linear;
  ${({dir})=>{
    if(dir === 'right')
    {
        return css`
          right: 0;
          translate: 50%;

        `
    }else {
      return css`
         left: 0;
         translate: -50%;

        `

    }

  }}
  @media screen and (max-width: 1178px){
    ${({dir})=>{
    if(dir === 'right')
    {
        return css`
            translate: -50%;

        `
    }else {
      return css`
        translate: 50%;
          
        `

    }

  }}   
  }
  &:hover {
    color : #EEEFFB;
    background-color:#1A0B5B ;
  }
`
export const FeatureProducts = () => {
  const [slide , setSlide ]=useState(0);

  const handleClick = (dir)=>{
    if (dir==="left") {
      
      if(slide === 0)
        setSlide(2);
        else
        setSlide(slide -1);
    }else if (dir === "right"){
      setSlide((slide+1)%3);
    }
  }
  return (
    <Container>
      <FeatureHeader>Featured Products</FeatureHeader>
      <Slider >
        <Wrapper slide={slide}>
        
             <FeatureProduct />
             <FeatureProduct />
             <FeatureProduct />
        
        </Wrapper>

        <Wrapper slide={slide}>
             <FeatureProduct />
             <FeatureProduct />
             <FeatureProduct />
        </Wrapper>

        <Wrapper slide={slide}>
             <FeatureProduct />
             <FeatureProduct />
             <FeatureProduct />
        </Wrapper>
      </Slider>
      <SliderBullets>
        <Bullet id= {0} slide={slide} onClick={()=>{setSlide(0)}}></Bullet>
        <Bullet id= {1} slide={slide} onClick={()=>{setSlide(1)}}></Bullet>
        <Bullet id= {2} slide={slide} onClick={()=>{setSlide(2)}}></Bullet>
      </SliderBullets>
       
        <IconContainer dir='right' onClick={()=>handleClick("right")}>
          <ArrowForwardIosOutlined></ArrowForwardIosOutlined>
        </IconContainer>
        
        <IconContainer dir='left' onClick={()=>handleClick("left")}>
          <ArrowBackIosOutlined></ArrowBackIosOutlined>
        </IconContainer>
      
    </Container>
  )
}
