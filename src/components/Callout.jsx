import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    background-image: url(images/callout.png);
    margin-bottom: 50px;
    margin-top: 50px;
    height: 350px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 35px;
    text-align: center;
    line-height: 50px;
    color : ${({theme:{colors:{secondary}}})=> secondary};
`
const Button = styled.button`
    color: white;
    font-size: 15px;
    background-color: #FB2E86;
    padding: 15px 35px;
    font-family: 'Josefin Sans', sans-serif;
    border: none;
    outline: none;
    cursor: pointer !important;
    transition:all .5s linear;
    &:hover{
        scale: 1.3;
    }
`
const Callout = () => {
  return (
   <Container>
   <Title>Get Leatest Update By Subscribe 0ur Newslater</Title>
    <Button type='submit'>Shop Now</Button>
   </Container>
  )
}

export default Callout
