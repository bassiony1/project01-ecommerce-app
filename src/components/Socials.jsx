import { Facebook, Instagram, Twitter } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'


const IconContainer = styled.div`
    aspect-ratio: 1/1;
    width: 25px;
    
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    color: #EEEFFB;
    transition: all .7s ease-in-out;
    background-color : #2F1AC4;
    
`
const Container = styled.div`
    background-color: #9da0ae91;

`
const Wrapper = styled.div`
    max-width: 1140px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    margin-right:10px;
`
const CopyRights = styled.p`
       color : rgba(21, 24, 117,.35);
        font-size:14px;
        margin-left:10px;
`
const Socials = () => {
  return (
   <Container>
    <Wrapper>
        <CopyRights>&copy; Webecy - All Rights Reserved</CopyRights>
        <Icons>
            <IconContainer>
                <Instagram sx={{fontSize:15}}></Instagram>
            </IconContainer>
            <IconContainer>
                <Facebook sx={{fontSize:15}}></Facebook>
            </IconContainer>
            <IconContainer>
                <Twitter sx={{fontSize:15}}></Twitter>
            </IconContainer>
        </Icons>
    </Wrapper>
   </Container>
  )
}

export default Socials
