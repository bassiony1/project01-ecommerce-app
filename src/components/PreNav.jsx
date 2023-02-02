import { EmailOutlined, FavoriteBorderOutlined, KeyboardArrowDownOutlined , PersonOutlineOutlined, PhoneInTalkOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
    background-color:#7E33E0;
    @media screen and (max-width : 768px) {
        display: none;
    }
    `
const  Wrapper = styled.div`
    max-width: 1140px;  
    margin : 0 auto ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

`
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`
const Email = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 30px;
`
const EmailText = styled.div`
  margin-left: 10px;
  font-size: 16px;

`
const PhoneContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color : white;
  `
const PhoneIcon = styled.div`
`
const PhoneText = styled.div`
  font-size: 16px;
  margin-left: 10px;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
`
const IconContainer = styled.div`
  color: white;
  font-size: 5px;
  cursor: pointer;
`
const List = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
  `
  const ListItem = styled.li`
    margin-right: 10px;
    color: white;
    cursor: pointer;
  `
  const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

   
  `
  const ItemName = styled.span`
      font-size: 16px;
  `
export const PreNav = () => {

  return (
    <Container>
        <Wrapper>
      <Left>
        <Email>
          <EmailOutlined></EmailOutlined>
          <EmailText>mhhasanul@gmail.com</EmailText>
        </Email>
        <PhoneContainer>
          <PhoneIcon>
            <PhoneInTalkOutlined></PhoneInTalkOutlined>
          </PhoneIcon>
            <PhoneText>(12345)67890</PhoneText>
        </PhoneContainer>
      </Left>
      <Right>
        <List>
          <ListItem>
            <ItemContainer>
              <ItemName>English</ItemName>
              <IconContainer>
                <KeyboardArrowDownOutlined  sx={{ fontSize: 20 }}></KeyboardArrowDownOutlined>
              </IconContainer>
            </ItemContainer>
          </ListItem>
          <ListItem>
            <ItemContainer>
              <ItemName>USD</ItemName>
              <IconContainer>
                <KeyboardArrowDownOutlined sx={{ fontSize: 20 }} ></KeyboardArrowDownOutlined>
              </IconContainer>
            </ItemContainer>
          </ListItem>
          <ListItem>
            <ItemContainer>
              <ItemName>Login</ItemName>
              <IconContainer>
                <PersonOutlineOutlined sx={{ fontSize: 20 }}></PersonOutlineOutlined>
              </IconContainer>
            </ItemContainer>
          </ListItem>
          <ListItem>
            <ItemContainer>
              <ItemName>Wishlist</ItemName>
              <IconContainer>
                <FavoriteBorderOutlined  sx={{ fontSize: 20 }}></FavoriteBorderOutlined>
              </IconContainer>
            </ItemContainer>
          </ListItem>
        </List>
           <IconContainer>
            <ShoppingCartOutlined sx={{ fontSize: 25 }}></ShoppingCartOutlined>
            </IconContainer> 
      </Right>
        </Wrapper>
    </Container>
  )
}
