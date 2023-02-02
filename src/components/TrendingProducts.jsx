import React from 'react'
import styled from 'styled-components'
import TrendingProduct from './TrendingProduct'

const Container = styled.div`
    max-width: 1440px;
    margin: 100px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap: 80px;
    `
const Title = styled.h1`
    font-size: 53px;
    color: #151875;
    @media screen and (max-width : 460px){
        font-size: 30px;
    }
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 30px;
    flex-wrap: wrap;
`
const TrendingProducts = () => {
  return (
    <Container>
    <Title>Trending Products</Title>
    <Wrapper>
        <TrendingProduct src = "images/chair2.png"/>
        <TrendingProduct src = "images/chair3.png"/>
        <TrendingProduct src = "images/chair1.png"/>
        <TrendingProduct src = "images/fansychair.png"/>
    </Wrapper>
</Container>
  )
}

export default TrendingProducts
