import { Close, Menu, SearchOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import styled, { css } from 'styled-components'

const Container = styled.div`
    position: relative;
    max-width : 1140px  ;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    @media screen and (max-width : 937px) {
        flex-direction: column;
    }
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (max-width : 937px) {
        flex-direction: column;
        width: 100%;
        
    }
`
const Logo = styled.h1`
    color: #0D0E43;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    font-size: 40px;
    @media screen and (max-width : 937px) {
        width: 100%;
    }
    `
const List = styled.ul`
    list-style: none;
    display: flex;
    gap: 30px;
    margin: 0 auto;
    transition: all 1s ease-in-out;
    @media screen and (max-width : 937px) {
        flex-direction: column;
        width: 100%;
        gap : 0 ;
        ${({dis})=> {
            if(dis === true){
                return css`
                    max-height: 100vh;
                    opacity: 1;
                `
            }else {

                return css`
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                `
            }


        }}
    }
`
const ListItem = styled.li`
color: #0D0E43;
font-family: 'Lato', sans-serif;
cursor:pointer;
&:hover {

    color : #FB2E86;
}
@media screen and (max-width : 937px) {
       width: 100%;
       text-align: center;
       padding: 10px;
       margin : 10px 0 ;
       &:hover {
            background-color: #FB2E86;
            color : white
       }
    }
`
const Right = styled.div`
    flex: .5;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    transition: all 1s ease-in-out;
    @media screen and (max-width : 937px) {
        width: 100%;

        overflow: hidden;
        flex: 1;
        justify-content: center;
        ${({dis})=> {
            if(dis === true){
                return css`
                          max-height: 100vw;

                `
            }else {

                return css`
                    max-height : 0 ;
                `
            }


        }}
    }
    
`
const InputGroup = styled.div`
    flex: .5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid #E7E6EF;
`
const IconContainer = styled.div`
    color: white;
    flex : 1;
    background-color: #FB2E86;
    padding: 5px 10px;
    display : flex ; 
    align-items: center;
    justify-content: center;
`
const Input = styled.input`
    flex : 6;
    border: none;
    outline: none;
    padding : 10px;

`

const MenuIcon = styled(Menu)`
    font-size: 40px ;
    color: #0D0E43;
    position: absolute;
    right: 0;
    top: 0;
    translate: -50% 100% ; 
    cursor: pointer;
    display: none !important;
    @media screen and (max-width : 937px) {
        ${({dis})=> {
            if(dis === true){
                return css`
                    display: none !important;
                `
            }else {

                return css`
                    display: block !important;
                `
            }


        }}
    } 
`
const CloseIcon = styled(MenuIcon.withComponent(Close))`
@media screen and (max-width : 937px) {
         ${({dis})=> {
            if(dis === true){
                return css`
                    display: block !important;
                `
            }else {

                return css`
                    display: none !important;
                `
            }


        }}
    }
`

export const NavBar = () => {
    const [expand , setExpand] = useState(false);
  return (
    <Container>
        <Left>
            <Logo>Hekto</Logo>
            <List dis = {expand}>
                <ListItem>Home</ListItem>
                <ListItem>Pages</ListItem>
                <ListItem>Products</ListItem>
                <ListItem>Blog</ListItem>
                <ListItem>Shop</ListItem>
                <ListItem>Contact</ListItem>
            </List>
        </Left>
        <Right dis = {expand}>
            <InputGroup>
            <Input></Input>
            <IconContainer>
                <SearchOutlined ></SearchOutlined>
            </IconContainer>
            </InputGroup>
        </Right>
            <MenuIcon dis = {expand} onClick={()=> {setExpand(!expand)}}></MenuIcon>
            <CloseIcon dis = {expand} onClick={()=> {setExpand(!expand)}}></CloseIcon>
        
    </Container>
  )
}
