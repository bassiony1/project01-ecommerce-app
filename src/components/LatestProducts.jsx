import React from 'react'
import styled from 'styled-components'
import LatestProduct from './LatestProduct'

const Container = styled.div`
    max-width : 1140px ;
    margin: 100px auto ;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
`
const Title = styled.h1`
    font-size: 53px;
    color: #151875;
    text-align: center;
    width: 100%;
    @media screen and (max-width : 460px){
        font-size: 30px;
    }
`
const Links = styled.ul`
    list-style: none;
    width : 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    @media screen and (max-width : 460px){
        gap: 15px;
    }
`
const Link = styled.li`
    display: block;
    color: #151875;
    font-size: 18px;
    cursor: pointer;
    transition: all .4s ease-in-out;
    &:hover {
        color: #FB2E86;
        text-decoration: underline;

    }
    @media screen and (max-width : 460px){
        font-size: 13px;
    }

`
const Wrapper = styled.div`
    width: 100%;
    display: grid;
    column-gap: 20px;
    row-gap: 50px;
    grid-template-columns: repeat(auto-fill , minmax(300px , 1fr));
`
const LatestProducts = () => {
  return (
    <Container>
        <Title>Latest Products</Title>
        <Links>
            <Link>New Arrival</Link>
            <Link>Best Seller</Link>
            <Link>Featured</Link>
            <Link>Special Offer</Link>
        </Links>
    <Wrapper>
          <LatestProduct sale = {false}/>
          <LatestProduct sale = {true}/>
          <LatestProduct sale = {false}/>
          <LatestProduct sale = {false}/>
          <LatestProduct sale = {false}/>
          <LatestProduct sale = {false}/>
    </Wrapper>
    </Container>
  )
}

export default LatestProducts
