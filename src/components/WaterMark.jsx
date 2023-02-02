import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 20px;

`

const Water = styled.img`
    object-fit: contain;
    width: 100%;

`
const WaterMark = () => {
  return (
   <Container>
    <Water src='images/watermark.png' alt = 'Water Mark'></Water>
   </Container>
  )
}

export default WaterMark
