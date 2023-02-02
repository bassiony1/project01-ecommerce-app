import React from 'react'
import styled from 'styled-components'
import ShopexPro from './ShopexPro'

const Container = styled.div`
    max-width: 1440px;
    margin: 0 auto;
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
const ShopexPros = () => {
  return (
    <Container>
        <Title>What Shopex Offer!</Title>
        <Wrapper>
            <ShopexPro src = "images/free-delivery.png"/>
            <ShopexPro src = "images/premium-quality.png"/>
            <ShopexPro src = "images/24-hours-support.png"/>
            <ShopexPro src = "images/cashback.png"/>
        </Wrapper>
    </Container>
  )
}

export default ShopexPros
